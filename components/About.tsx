
import React from 'react';
import { Activity, Building2, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="despre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-amber-600 font-bold tracking-widest uppercase text-sm">
              <Activity size={18} />
              <span>Cine suntem</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              O companie solidă, construită pe încredere.
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Titiconst este o firmă de construcții din Bacău, cu peste 25 de ani de experiență în execuția de case la roșu, reabilitări, hale industriale și lucrări din beton armat. 
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Realizăm construcții civile și industriale, garduri, platforme și amenajări exterioare — toate executate corect, cu materiale de calitate și oameni dedicați care înțeleg valoarea fiecărei investiții.
            </p>
            
            <div className="grid grid-cols-2 gap-10 pt-6">
              <div className="relative">
                <span className="block text-5xl font-black text-slate-900 tracking-tighter">1998</span>
                <span className="text-sm text-slate-500 font-bold uppercase mt-2 tracking-wide">Anul înființării</span>
                <div className="absolute -left-4 top-2 w-1 h-12 bg-amber-500 rounded-full"></div>
              </div>
              <div className="relative">
                <span className="block text-5xl font-black text-slate-900 tracking-tighter">100+</span>
                <span className="text-sm text-slate-500 font-bold uppercase mt-2 tracking-wide">Proiecte Finalizate</span>
                <div className="absolute -left-4 top-2 w-1 h-12 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-10">
            <div className="aspect-[4/5] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden relative group shadow-2xl">
              <img 
                src="https://picsum.photos/seed/construction-1/800/1000" 
                alt="Construction site" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/95 backdrop-blur rounded-2xl border border-slate-200 shadow-2xl transform transition-transform group-hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <Quote className="text-amber-500 shrink-0" size={32} />
                  <div>
                    <p className="text-base text-slate-800 font-medium italic leading-relaxed">
                      "Calitatea nu este un act, ci un obicei. Construim pentru viitor, respectând standardele prezentului."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                       <div className="h-px w-8 bg-slate-300"></div>
                       <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Echipa Titiconst</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
