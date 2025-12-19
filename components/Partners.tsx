
import React from 'react';
import { Landmark } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section id="colaboratori" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-16">Parteneri și Colaboratori de Încredere</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3 text-2xl font-black text-slate-800 tracking-tighter hover:text-slate-900 transition-colors">
            <Landmark size={32} className="text-amber-500" /> PRIMĂRIA BACĂU
          </div>
          <div className="text-3xl font-black text-slate-800 tracking-tight hover:text-slate-900">
            GLENCORA
          </div>
          <div className="text-3xl font-black text-slate-800 tracking-tight hover:text-slate-900">
            DEMECO
          </div>
          <div className="flex items-center gap-2 text-2xl font-black text-slate-800 tracking-tight hover:text-slate-900">
            <span className="font-normal border-2 px-2 py-1 border-slate-800 rounded-lg text-lg">CN</span> VASILE ALECSANDRI
          </div>
          <div className="text-3xl font-black text-slate-800 tracking-tight hover:text-slate-900">
            AGRICOLA
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t border-slate-50">
          <p className="text-slate-400 text-sm font-medium">Lucrăm cu cei mai buni furnizori pentru a asigura calitatea materialelor folosite.</p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
