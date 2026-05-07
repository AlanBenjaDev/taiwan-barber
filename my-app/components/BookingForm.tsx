'use client';
import { useState, useMemo, useEffect } from 'react';
import { SERVICES, AVAILABLE_HOURS } from '@/constants/services';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', service: '', date: '', time: '' });
  const [occupiedSlots, setOccupiedSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Fecha mínima: Hoy (Evita turnos en el pasado)
  const today = new Date().toISOString().split('T')[0];

  // 1. Efecto Maestro: Cada vez que cambie la fecha, consultamos al Backend
  useEffect(() => {
    const checkAvailability = async () => {
      if (!formData.date) return;

      try {
        // IMPORTANTE: Puerto 4000 según tu última configuración
        const res = await fetch(`http://localhost:4000/api/appointments/ver/turnos?date=${formData.date}`);
        
        if (!res.ok) throw new Error("Error al obtener disponibilidad");

        const data = await res.json();
        
        // Mapeamos los resultados (ajustamos a 'time' o 'appointment_time' según tu DB)
        const booked = data.map((item: any) => {
          const t = item.appointment_time || item.time;
          return t.substring(0, 5); // Normalizamos a "HH:mm"
        });

        setOccupiedSlots(booked);
      } catch (error) {
        console.error("Fallo en la sincronización de turnos:", error);
        setOccupiedSlots([]); // Si falla, reseteamos para no bloquear al usuario
      }
    };

    checkAvailability();
  }, [formData.date]); // Se dispara automáticamente al clickear una fecha en el calendario

  // 2. Filtro de Horas (Reactividad Pura)
  const availableHoursFiltered = useMemo(() => {
    const selectedService = SERVICES.find(s => s.id === formData.service);
    let hours = [...AVAILABLE_HOURS];

    // Regla de Negocio: Mechas solo mañana
    if (selectedService?.name.toLowerCase().includes('mechas')) {
      hours = hours.filter(h => parseInt(h.split(':')[0]) <= 13);
    }

    // Filtro de Disponibilidad Real: Solo las que NO están en occupiedSlots
    return hours.filter(h => !occupiedSlots.includes(h));
  }, [formData.service, occupiedSlots]);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/appointments/crear/turno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_name: formData.name,
          service_id: Number(formData.service),
          date: formData.date,
          time: formData.time
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Turno ocupado recientemente");
      }

      // WhatsApp confirmación
      const serviceName = SERVICES.find(s => s.id === formData.service)?.name;
      const message = `*TAIWAN BARBER*%0A` +
        `*Cliente:* ${formData.name.toUpperCase()}%0A` +
        `*Servicio:* ${serviceName}%0A` +
        `*Fecha:* ${formData.date}%0A` +
        `*Hora:* ${formData.time}HS`;
      
      window.open(`https://wa.me/5493541628322?text=${message}`, '_blank');
      
      setFormData({ name: '', service: '', date: '', time: '' });
      setOccupiedSlots([]);
      alert("¡Turno agendado!");

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleBooking} className="space-y-6 bg-zinc-900/40 p-8 border border-white/5 backdrop-blur-xl">
          <h3 className="text-2xl font-black uppercase italic mb-8 tracking-tighter">
            Reservar <span className="text-red-600">Turno</span>
          </h3>
          
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Nombre</label>
            <input 
              required 
              type="text" 
              value={formData.name} 
              className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-red-600 outline-none uppercase text-sm" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Servicio</label>
            <select 
              required 
              value={formData.service} 
              className="w-full bg-transparent border-b border-zinc-800 py-3 focus:border-red-600 outline-none uppercase text-sm cursor-pointer" 
              onChange={(e) => setFormData({...formData, service: e.target.value, time: ''})}
            >
              <option value="" className="bg-zinc-950">Seleccionar...</option>
              {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-zinc-950">{s.name}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Calendario</label>
              <input 
                required 
                min={today} 
                type="date" 
                value={formData.date} 
                className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-red-600 uppercase text-sm custom-calendar-icon" 
                onChange={(e) => {
                  setFormData({...formData, date: e.target.value, time: ''}); // Reseteamos hora al cambiar fecha
                }} 
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Disponibles</label>
              <select 
                required 
                value={formData.time} 
                disabled={!formData.date} 
                className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-red-600 uppercase text-sm disabled:opacity-20 transition-opacity" 
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              >
                <option value="" className="bg-zinc-950">Hora</option>
                {availableHoursFiltered.map(h => (
                  <option key={h} value={h} className="bg-zinc-950">{h} HS</option>
                ))}
              </select>
            </div>
          </div>

          <button 
            disabled={loading || !formData.time} 
            className="w-full bg-white text-black py-5 uppercase text-[11px] font-black tracking-[0.4em] hover:bg-red-600 hover:text-white transition-all duration-500 disabled:bg-zinc-800 disabled:text-zinc-600"
          >
            {loading ? 'Sincronizando...' : 'Confirmar Cita'}
          </button>
        </form>
      </div>

      <style jsx>{`
        .custom-calendar-icon::-webkit-calendar-picker-indicator {
          filter: invert(1); /* Hace que el icono del calendario sea blanco */
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}