'use client';
import { useState, useEffect } from 'react';

export default function AdminPanel() {

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(false);

 const backend = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';
  const fetchTurnos = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/appointments/ver/turnos?date=${selectedDate}`);
      if (!res.ok) throw new Error("Error en la petición");
      const data = await res.json();
      setTurnos(data);
    } catch (error) {
      console.error("Error al buscar turnos:", error);
      setTurnos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTurnos();
  }, [selectedDate]);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de que querés eliminar este turno? Esta acción no se puede deshacer.")) return;
    
    try {
      const res = await fetch(`${backend}/api/appointments/eliminar/turno/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchTurnos(); 
      }
    } catch (error) {
      alert("No se pudo eliminar el turno");
    }
  };

  return (
    <div className="p-10 bg-black text-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">
              Panel de <span className="text-red-600">Control</span>
            </h1>
            <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Taiwan Barber Admin</p>
          </div>

    
          <div className="bg-zinc-900 p-4 border border-zinc-800 rounded-lg">
            <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">Filtrar por fecha</label>
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent text-white outline-none cursor-pointer uppercase text-sm font-bold"
            />
          </div>
        </header>

        <div className="bg-zinc-900/40 border border-white/5 backdrop-blur-md rounded-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                <th className="p-4 text-left font-medium">Hora</th>
                <th className="p-4 text-left font-medium">Servicio</th>
                <th className="p-4 text-center font-medium">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr><td colSpan={3} className="p-10 text-center text-zinc-600 animate-pulse uppercase text-xs tracking-widest">Cargando turnos...</td></tr>
              ) : turnos.length === 0 ? (
                <tr><td colSpan={3} className="p-10 text-center text-zinc-600 italic uppercase text-xs tracking-widest">No hay turnos para esta fecha</td></tr>
              ) : (
                turnos.map((t: any) => (
                  <tr key={t.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-4 font-bold text-red-600">{t.time} HS</td>
                    <td className="p-4 text-sm uppercase tracking-wide">{t.service}</td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleDelete(t.id)}
                        className="opacity-40 group-hover:opacity-100 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white px-4 py-2 rounded-sm text-[10px] uppercase font-black transition-all duration-300"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <style jsx>{`
        input::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
      `}</style>
    </div>
  );
}