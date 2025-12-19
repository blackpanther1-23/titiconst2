
import React from 'react';
import { HardHat, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Social */}
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-3 text-white mb-8 group">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 shadow-lg group-hover:bg-amber-400 transition-colors">
                <HardHat size={22} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-tight">TITICONST</span>
            </a>
            <p className="text-sm leading-relaxed mb-8 text-slate-500">
              Construim viitorul cu responsabilitate și profesionalism în Bacău și împrejurimi. Peste un sfert de secol de excelență tehnică.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-amber-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <span className="w-6 h-1 bg-amber-500 rounded-full"></span>
              Informații Contact
            </h4>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  Strada Militari nr. 35A, <br />
                  Birou 1–2, Etaj P, Bacău, 600233
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-colors">
                    <Phone size={20} />
                  </div>
                  <a href="tel:0740807947" className="text-sm font-bold hover:text-white transition-colors">0740 807 947</a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <a href="mailto:titiconst@yahoo.com" className="text-sm font-bold hover:text-white transition-colors">titiconst@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <span className="w-6 h-1 bg-amber-500 rounded-full"></span>
              Program
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex justify-between items-center py-2 border-b border-slate-900">
                <span className="flex items-center gap-2 text-slate-500"><Clock size={16} /> Luni - Vineri:</span>
                <span className="text-white">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-slate-900">
                <span className="flex items-center gap-2 text-slate-500"><Clock size={16} /> Sâmbătă:</span>
                <span className="text-amber-500 font-bold uppercase text-[10px]">Urgențe</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-slate-900">
                <span className="flex items-center gap-2 text-slate-500"><Clock size={16} /> Duminică:</span>
                <span className="text-slate-700">Închis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-600">
          <p>© 2024 TITICONST. Toate drepturile rezervate.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-amber-500 transition-colors">Termeni</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Confidențialitate</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
