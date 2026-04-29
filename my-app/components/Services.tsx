import { SERVICES } from '@/constants/services';

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Menu de Autor</h2>
          <h3 className="text-4xl font-bold tracking-tighter uppercase italic">
            Servicios <span className="text-red-600">Premium</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     
          <div className="group border border-black/5 p-8 hover:border-red-600 transition-all duration-500 bg-white shadow-sm">
            <span className="text-red-600 font-serif text-xl italic mb-4 block">01.</span>
            <h4 className="text-xl font-black uppercase mb-3 tracking-tighter">Cortes de pelo</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Corte de pelo con diseño personalizado.
            </p>
            <div className="h-[1px] w-full bg-gray-100 group-hover:bg-red-600/20 transition-colors"></div>
          </div>

   
          <div className="group border border-black/5 p-8 hover:border-red-600 transition-all duration-500 bg-white shadow-sm">
            <span className="text-red-600 font-serif text-xl italic mb-4 block">02.</span>
            <h4 className="text-xl font-black uppercase mb-3 tracking-tighter">Cortes + Barba</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Experiencia completa. Perfilado de barba y corte de pelo.
            </p>
            <div className="h-[1px] w-full bg-gray-100 group-hover:bg-red-600/20 transition-colors"></div>
          </div>


          <div className="group border-2 border-black p-8 hover:border-red-600 transition-all duration-500 bg-black text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-[8px] px-3 py-1 uppercase tracking-widest font-bold">
              Destacado
            </div>
            <span className="text-red-600 font-serif text-xl italic mb-4 block">03.</span>
            <h4 className="text-xl font-black uppercase mb-3 tracking-tighter">Mechas</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Coloración técnica para aportar luz y contraste. <br /> 
              <span className="text-white font-bold underline decoration-red-600 italic">
                * Incluye corte de pelo de cortesía.
              </span>
            </p>
            <div className="h-[1px] w-full bg-white/10 group-hover:bg-red-600 transition-colors"></div>
          </div>
        </div>

        <p className="text-center mt-12 text-[10px] text-gray-400 uppercase tracking-widest">
          * Todos los servicios incluyen lavado y peinado final.
        </p>
      </div>
    </section>
  );
}