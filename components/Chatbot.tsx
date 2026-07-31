"use client";
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 h-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-blue-600 rounded-t-2xl">
            <span className="font-bold">Aura Assistant</span>
            <button onClick={() => setIsOpen(false)}><X size={20}/></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="bg-slate-800 p-3 rounded-lg text-sm max-w-[80%]">
              Hi! I'm Aura AI. How can I help you automate your business today?
            </div>
          </div>
          <div className="p-4 border-t border-slate-800">
            <input className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm outline-none focus:border-blue-500" placeholder="Type a message..." />
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
}