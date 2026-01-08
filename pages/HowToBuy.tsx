
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, MessageSquare, Truck, Heart } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const HowToBuy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SEO Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How to Buy Medical Textbooks in Nigeria: The Ultimate Student Guide
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find out how to get original medical literature delivered to any university in Nigeria without the stress.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 prose prose-slate prose-lg">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Introduction: Finding Quality Medical Literature</h2>
          <p className="text-slate-600 mb-4">
            If you are a student in Nigeria, you know that finding <Link to="/shop" className="text-blue-600 font-semibold underline">medical textbooks for students</Link> that are both high quality and reasonably priced can be a challenge. At MedPlexus, we specialize in bridging that gap. 
          </p>
          <p className="text-slate-600">
            Founded by Lawani George at Edo State University Uzairue, we understand the struggle of Nigerian medical students firsthand. Whether you are looking for <strong>nursing textbooks Nigeria</strong> students trust or <strong>clinical gear</strong>, our process is built by students, for students.
          </p>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-3xl border border-blue-100 not-prose">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Step-by-Step Guide to Buying</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Browse Our Shop</h3>
                <p className="text-slate-600">Explore our <Link to="/shop" className="text-blue-600 underline">shop page</Link> to see vetted medicine and nursing books.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">WhatsApp Confirmation</h3>
                <p className="text-slate-600">Confirm stock and get the latest price directly via WhatsApp chat.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Safe Dispatch</h3>
                <p className="text-slate-600">Pay via bank transfer and get your item delivered to your hostel in 24-72 hours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Buy from MedPlexus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <div className="flex gap-4 items-start">
              <CheckCircle className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Affordable Pricing</h4>
                <p className="text-slate-500 text-sm">Best rates for medical students in Nigeria.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Truck className="text-blue-500 w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Priority Campus Delivery</h4>
                <p className="text-slate-500 text-sm">Serving all 36 states and all major medical colleges.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <BookOpen className="text-purple-500 w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Authentic Only</h4>
                <p className="text-slate-500 text-sm">No blurry prints. Only original quality vetted books.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Heart className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Student Advocacy</h4>
                <p className="text-slate-500 text-sm">We advocate for lower book prices for Nigerian students.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[3rem] text-center not-prose">
          <h2 className="text-3xl font-bold mb-6">Get Your Books Today</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Ready to order? Browse our curated catalog of <strong>medical textbooks for students in Nigeria</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/shop" className="bg-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">Go to Shop</Link>
             <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="bg-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all flex items-center gap-2 justify-center">
                <MessageSquare className="w-5 h-5" /> Buy via WhatsApp
             </a>
          </div>
        </section>
      </article>
    </div>
  );
};

export default HowToBuy;
