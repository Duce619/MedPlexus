
import React from 'react';
import { Search, MessageSquare, CreditCard, Truck, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const HowToOrder: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-blue-600" />,
      title: "Choose Your Textbook",
      desc: "Browse our shop catalog to find exactly what you need for your level and course."
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-emerald-600" />,
      title: "Confirm via WhatsApp",
      desc: "Click 'Buy' on any book. We'll confirm if it's in stock and tell you the current delivery time."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-purple-600" />,
      title: "Make Secure Payment",
      desc: "Transfer the amount to our provided bank details. Send a screenshot of the receipt back to us on WhatsApp."
    },
    {
      icon: <Truck className="w-10 h-10 text-amber-600" />,
      title: "Receive Your Order",
      desc: "We process your delivery immediately. You'll receive your books at your campus or doorstep within 24-72 hours."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900">Ordering is as Easy as 1-2-3-4</h1>
          <p className="text-slate-600 text-lg">We've streamlined our process to ensure you get your books fast.</p>
        </div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-center group">
              <div className="flex-shrink-0 bg-slate-50 w-24 h-24 rounded-3xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                {step.icon}
              </div>
              <div className="flex-grow text-center md:text-left space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-blue-600 font-bold">Step {i + 1}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 max-w-2xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Need help with your order?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Our support team is ready to walk you through the process right now.</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-900/40"
            >
              <MessageSquare className="w-5 h-5" /> Chat with an Agent
            </a>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full -ml-32 -mt-32"></div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
