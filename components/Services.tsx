
import React from 'react';
import { Home, Hammer, Layers, Trees, FileText, ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; color: string }> = ({ title, desc, icon, color }) => (
  <div className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-slate-900 mb-8 transition-all duration-500 group-hover:scale-110 ${color}`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-amber-600 transition-colors">{title}</h3>
    <p className="text-slate-500 text-base leading-relaxed mb-6 flex-grow">{desc}</p>
    <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500 rounded-full"></div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Construcții Civile & Industriale",
      desc: "Execuție de case la roșu, hale industriale moderne și structuri metalice durabile adaptate nevoilor tale.",
      icon: <Home size={28} />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Reabilitări și Renovări",
      desc: "Modernizarea clădirilor existente, consolidări structurale și reparații capitale pentru extinderea duratei de viață.",
      icon: <Hammer size={28} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Lucrări Beton & Fundații",
      desc: "Expertiză în turnarea betonului armat, fundații speciale și platforme industriale rezistente la trafic greu.",
      icon: <Layers size={28} />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Amenajări Exterioare",
      desc: "Construcție de garduri, pavaje pietonale și carosabile, sistematizări verticale și amenajări peisagistice.",
      icon: <Trees size={28} />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Consultanță și Ofertare",
      desc: "Suport tehnic complet, analiză de proiect și întocmirea de devize corecte, transparente și competitive.",
      icon: <FileText size={28} />,
      color: "bg-purple-100 text-purple-600"
    },
  ];

  return (
    <section id="servicii" className="py-24 bg-slate-50/50 border-y border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
         <div className="w-96 h-96 border-8 border-slate-900 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-amber-600 bg-amber-50 rounded-full uppercase tracking-widest border border-amber-100">Expertiză tehnică</div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">Serviciile Noastre</h2>
          <p className="text-xl text-slate-600 font-light">Oferim o gamă completă de servicii în domeniul construcțiilor, de la fundații complexe până la structuri metalice industriale.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} title={s.title} desc={s.desc} icon={s.icon} color={s.color} />
          ))}

          {/* Special CTA Card */}
          <div className="bg-slate-900 p-10 rounded-3xl flex flex-col justify-center items-start shadow-xl shadow-slate-900/20 group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <ArrowRight size={120} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight relative z-10">Ai un proiect în plan?</h3>
            <p className="text-slate-400 text-lg mb-8 relative z-10">Discută cu echipa noastră despre viziunea ta și obține o estimare corectă.</p>
            <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500 text-slate-900 rounded-xl font-bold hover:bg-amber-400 transition-all active:scale-95 relative z-10">
              Solicită ofertă gratuită
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
