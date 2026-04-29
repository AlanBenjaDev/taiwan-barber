import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import Services from '@/components/Services'; // Asegúrate de haber creado este archivo en components/

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col justify-center items-center px-6 text-center bg-black text-white relative overflow-hidden">
        <div className="z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase italic">
            Taiwan <span className="text-red-600">Barber</span>
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-8 animate-pulse">
            Precisión. Silencio. Arte.
          </p>
          <a href="#booking" className="border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all uppercase text-[10px] tracking-widest">
            Reservar Turno
          </a>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black"></div>
      </section>

      {/* Info Section (Ambiente y Ubicación) */}
      <section id="info" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border-l-2 border-red-600 pl-6">
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter">EL AMBIENTE</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              No es solo un corte. Es la pausa que necesitabas en el día. 
              Cada detalle nos importa, desde la técnica hasta el ritual final.
            </p>
          </div>
          <div className="border-l-2 border-black pl-6" id="ubicación">
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter">UBICACIÓN</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Encontranos en <span className="font-bold text-black">Los Pinos, Villa Santa Cruz del Lago</span>. 
              Un espacio diseñado para la calma, lejos del ruido.
            </p>
          </div>
        </div>
      </section>

      <Services />

      {/* Formulario de Reserva */}
      <BookingForm />

      <footer className="py-12 text-center bg-black">
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
          © 2026 Taiwan Barber — Villa Santa Cruz del Lago, Córdoba
        </p>
        <p className="text-[9px] text-zinc-700 mt-2 tracking-widest uppercase">
          Minimalist Grooming Experience
        </p>
      </footer>
    </main>
  );
}