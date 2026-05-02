import { SERVICES } from '@/constants/services';

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#fafafa] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header de Sección */}
        <div className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 mb-4">
            Menu de Autor
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic italic">
            Servicios <span className="text-red-600">Premium</span>
          </h3>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 01. Cortes de Pelo */}
          <article className="group relative border border-black/5 p-8 bg-white hover:border-red-600 transition-all duration-500 shadow-sm hover:shadow-xl">
            <span className="text-red-600 font-serif text-2xl italic mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">01.</span>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter group-hover:text-red-600 transition-colors">Cortes de pelo</h4>
            <p className="text-zinc-500 text-xs leading-relaxed mb-8 uppercase tracking-widest">
              Diseño personalizado según fisionomía.
            </p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </article>

          {/* 02. Corte VIP */}
          <article className="group relative border border-black/5 p-8 bg-white hover:border-red-600 transition-all duration-500 shadow-sm hover:shadow-xl">
            <span className="text-red-600 font-serif text-2xl italic mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">02.</span>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter group-hover:text-red-600 transition-colors">Corte VIP</h4>
            <p className="text-zinc-500 text-xs leading-relaxed mb-8 uppercase tracking-widest">
              Experiencia completa. Corte, lavado y perfilado de barba.
            </p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </article>

          {/* 03. Mechas Standard */}
          <article className="group relative border border-black/5 p-8 bg-white hover:border-red-600 transition-all duration-500 shadow-sm hover:shadow-xl">
            <span className="text-red-600 font-serif text-2xl italic mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">03.</span>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter group-hover:text-red-600 transition-colors">Mechas</h4>
            <p className="text-zinc-500 text-xs leading-relaxed mb-8 uppercase tracking-widest">
              Coloración técnica focalizada. Incluye corte.
            </p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </article>

          {/* 04. Mechas VIP (Destacado en Negro) */}
          <article className="group relative border-2 border-black p-8 bg-black text-white hover:border-red-600 transition-all duration-500 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-[9px] px-4 py-1 uppercase tracking-[0.2em] font-black">
              Top Tier
            </div>
            <span className="text-red-600 font-serif text-2xl italic mb-6 block">04.</span>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Mechas VIP</h4>
            <p className="text-zinc-400 text-xs leading-relaxed mb-8 uppercase tracking-widest">
              Coloración total, nutrición profunda y <span className="text-white font-bold underline decoration-red-600">corte de regalo</span>.
            </p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </article>

        </div>

        {/* Disclaimer / Info Extra */}
        <div className="mt-16 pt-8 border-t border-black/5 text-center">
          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.4em] leading-loose">
            * Los servicios VIP y Coloración técnica incluyen <br />
            lavado profundo, tratamiento de hidratación y peinado final de autor.
          </p>
        </div>
      </div>
    </section>
  );
}