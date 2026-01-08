
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, X, Bot } from 'lucide-react';
import { getBookRecommendations } from '../geminiService';
import { TEXTBOOKS } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setResponse(null);
    try {
      const res = await getBookRecommendations(input, TEXTBOOKS);
      setResponse(res || "I'm sorry, I couldn't find a specific recommendation for that. Feel free to browse our shop!");
    } catch (error) {
      setResponse("Oops! The AI is sleeping. Please try again or message us on WhatsApp!");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white p-5 rounded-[2rem] shadow-2xl hover:shadow-plexusBlue/40 hover:-translate-y-2 transition-all flex items-center gap-3 group border border-white/10"
      >
        <div className="bg-plexusBlue p-2 rounded-xl group-hover:rotate-12 transition-transform">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <span className="font-extrabold text-sm whitespace-nowrap pr-2">
          MedPlexus AI
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[400px] max-w-[95vw] glass-morphism rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-white overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <div className="bg-plexusBlue p-2.5 rounded-xl">
             <Bot className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm uppercase tracking-widest leading-none mb-1">Plexus AI</span>
            <span className="text-[10px] font-bold text-plexusGreen uppercase tracking-widest flex items-center gap-1">
              <span className="h-1.5 w-1.5 bg-plexusGreen rounded-full"></span> Online & Academic
            </span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-xl p-2 transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 h-[350px] overflow-y-auto bg-slate-50/50 space-y-6">
        {response ? (
          <div className="flex gap-4">
             <div className="bg-plexusBlue w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">AI</div>
             <div className="bg-white p-5 rounded-3xl shadow-sm text-sm text-slate-700 leading-relaxed border border-slate-100 font-medium">
              {response}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
               <Sparkles className="w-8 h-8 text-plexusBlue mb-2 mx-auto" />
               <p className="text-slate-900 font-extrabold text-base">How can I help you today?</p>
            </div>
            <p className="text-slate-400 text-xs font-bold leading-relaxed px-10 italic">
              "Tell me your level and course, and I'll find the perfect textbooks for you."
            </p>
          </div>
        )}
        {isLoading && (
          <div className="flex gap-4">
             <div className="bg-plexusBlue w-8 h-8 rounded-lg flex-shrink-0 animate-pulse"></div>
             <div className="bg-white p-4 rounded-3xl shadow-sm flex items-center gap-3 italic text-xs text-slate-400 font-bold">
               <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
             </div>
          </div>
        )}
      </div>

      <form onSubmit={handleAsk} className="p-4 bg-white border-t border-slate-100 flex gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about 200L Anatomy books..."
          className="flex-grow bg-slate-100 rounded-2xl px-6 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-plexusBlue transition-all"
        />
        <button 
          disabled={isLoading}
          className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-plexusBlue disabled:opacity-50 shadow-lg shadow-slate-200 transition-all hover:scale-105 active:scale-95"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default AIAssistant;
