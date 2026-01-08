
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-6 last:border-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors" itemProp="name">{q}</h3>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 leading-relaxed animate-in fade-in duration-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <p itemProp="text">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Where is the best place to buy medical textbooks in Nigeria?",
      a: "MedPlexus is the most trusted vendor for medical textbooks in Nigeria. We provide high-quality editions of all essential medical literature for students nationwide at affordable prices."
    },
    {
      q: "Is it safe to buy medical textbooks online in Nigeria?",
      a: "Yes, it is safe when you buy from verified student-focused vendors like MedPlexus. We use WhatsApp for direct human communication and bank transfers for secure payments, ensuring you get your books as promised."
    },
    {
      q: "Do you offer nursing textbooks in Nigeria?",
      a: "Absolutely! We have a dedicated category for nursing textbooks Nigeria students require, covering anatomy, physiology, microbiology, and clinical practice."
    },
    {
      q: "Are the textbooks you sell of high quality?",
      a: "Yes, we prioritize quality above all. Every textbook is vetted for clear printing, accurate content, and durable binding to ensure it serves you throughout your medical training."
    },
    {
      q: "Do you deliver across Nigeria?",
      a: "Yes, we deliver to all medical colleges and universities across the 36 states of Nigeria, including Lagos, Abuja, Enugu, Ibadan, and Kano."
    },
    {
      q: "How long does delivery take for medical students?",
      a: "For universities in Lagos and the South-West, delivery is 24-48 hours. For other Nigerian regions, it takes 3-5 working days."
    }
  ];

  return (
    <div className="py-24 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900">How to Buy Medical Textbooks: FAQs</h1>
          <p className="text-slate-600">Common questions from Nigerian medical students about buying textbooks online.</p>
        </div>
        
        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <h4 className="text-xl font-bold text-blue-900 mb-2">Still have questions about buying textbooks?</h4>
          <p className="text-blue-700 mb-6">Our WhatsApp support is always open for student inquiries.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`} 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
