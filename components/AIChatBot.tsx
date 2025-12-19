
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../geminiService';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bună ziua! Sunt asistentul virtual TITICONST. Cum vă pot ajuta astăzi?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await getGeminiResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-[350px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-slate-900 p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Asistent Titiconst</h3>
                <div className="flex items-center gap-1.5">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Online Acum</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-5 overflow-y-auto space-y-4 bg-slate-50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                   <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                     m.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                   }`}>
                     {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                   </div>
                   <div className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                     m.role === 'user' 
                       ? 'bg-slate-900 text-white rounded-tr-none' 
                       : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                   }`}>
                     {m.text}
                   </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-2 text-slate-400 text-xs font-medium border border-slate-100">
                  <Loader2 size={14} className="animate-spin" />
                  Se gândește...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Întreabă orice despre serviciile noastre..."
                className="flex-grow bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500/50 transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-11 h-11 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-amber-500 transition-all hover:scale-110 active:scale-90 group relative"
        >
          <MessageSquare size={28} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white animate-ping"></div>
          <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl text-slate-900 text-xs font-bold shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Ai o întrebare? Vorbește cu noi!
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChatBot;
