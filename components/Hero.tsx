
import React from 'react';
import { ShieldCheck, Users, Award, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="acasa" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-12">
        <div className="lg:w-3/5 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Calitate Garantată Bacău
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Construim cu <span className="text-amber-500">responsabilitate</span> <br className="hidden lg:block" /> din 1998.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Peste 25 de ani de experiență în construcții civile, industriale și reabilitări. Nu promitem mai mult decât putem face, dar facem tot ce promitem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="#servicii" className="group inline-flex items-center justify-center h-14 px-8 text-base font-bold text-slate-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
              Vezi Serviciile Noastre
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center h-14 px-8 text-base font-bold text-white border border-slate-700 rounded-xl hover:bg-slate-800 transition-all hover:border-slate-500 active:scale-95">
              Contactează-ne
            </a>
          </div>
        </div>
        
        {/* Visual Cards Representation */}
        <div className="hidden lg:block lg:w-2/5 animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 shadow-2xl space-y-8">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">Seriozitate</h3>
                <p className="text-sm text-slate-400">Termene respectate cu strictețe</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">Echipă Stabilă</h3>
                <p className="text-sm text-slate-400">Personal calificat și dedicat</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">Experiență</h3>
                <p className="text-sm text-slate-400">25+ ani pe piața locală</p>
              </div>
            </div>
          </div>
          
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl animate-bounce-slow">
             <div className="flex items-center gap-3">
                <div className="text-3xl font-black text-slate-900">25+</div>
                <div className="text-xs font-bold text-slate-500 uppercase leading-tight">Ani de<br/>Experiență</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
