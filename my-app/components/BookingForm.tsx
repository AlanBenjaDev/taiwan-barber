'use client';
import { useState, useMemo } from 'react';
import { SERVICES, AVAILABLE_HOURS } from '@/constants/services';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: ''
  });

 
  const filteredHours = useMemo(() => {
    const selectedService = SERVICES.find(s => s.id === formData.service);
    if (selectedService?.name === 'Mechas') {
      return AVAILABLE_HOURS.filter(h => parseInt(h.split(':')[0]) <= 13);
    }
    return AVAILABLE_HOURS;
  }, [formData.service]);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = SERVICES.find(s => s.id === formData.service)?.name;
    
    const message = `*TAIWAN BARBER*%0A` +
      `--------------------------%0A` +
      `*Cliente:* ${formData.name}%0A` +
      `*Servicio:* ${serviceName}%0A` +
      `*Fecha:* ${formData.date}%0A` +
      `*Hora:* ${formData.time}%0A` +
      `--------------------------`;
    
   
    const phoneNumber = "5493541628322"; 
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return (
    <section id="booking" className="py-20 px-6 bg-[#0f0f0f] text-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-light mb-8 text-center tracking-widest uppercase">Reserva</h2>
        <form onSubmit={handleWhatsApp} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-tighter text-gray-400 mb-2">Nombre</label>
            <input 
              required
              type="text" 
              className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-red-600 outline-none transition-colors"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-tighter text-gray-400 mb-2">Servicio</label>
            <select 
              required
              className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-red-600 outline-none"
              onChange={(e) => setFormData({...formData, service: e.target.value, time: ''})}
            >
              <option value="" className="bg-black">Seleccionar...</option>
              {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-black">{s.name} - ${s.price}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-tighter text-gray-400 mb-2">Fecha</label>
              <input 
                required
                type="date" 
                className="w-full bg-transparent border-b border-gray-700 py-2 outline-none"
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-tighter text-gray-400 mb-2">Hora</label>
              <select 
                required
                value={formData.time}
                className="w-full bg-transparent border-b border-gray-700 py-2 outline-none"
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              >
                <option value="" className="bg-black">Hora</option>
                {filteredHours.map(h => <option key={h} value={h} className="bg-black">{h}</option>)}
              </select>
            </div>
          </div>

          {SERVICES.find(s => s.id === formData.service)?.name === 'Mechas' && (
            <p className="text-red-500 text-[10px] uppercase tracking-widest animate-pulse">
              * Mechas solo disponibles por la mañana (Hasta 13:00hs)
            </p>
          )}

          <button className="w-full bg-white text-black py-4 mt-4 uppercase text-xs font-bold tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
            Confirmar vía WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}