
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Users, MessageSquare, Activity, Stethoscope, BookOpen } from 'lucide-react';
import { TEXTBOOKS, WHATSAPP_NUMBER } from '../constants';
import BookCard from '../components/BookCard';

const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { domRef, isVisible };
};

const RevealSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const { domRef, isVisible } = useScrollReveal();
  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const featuredBooks = TEXTBOOKS.filter(b => b.isFeatured).slice(0, 8);

  return (
    <div className="bg-plexus-mesh">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-center lg:text-left space-y-10 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-3 glass-morphism px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold border-blue-100/50 shadow-sm text-plexusBlue">
                <span className="flex h-2 w-2 rounded-full bg-plexusGreen animate-pulse"></span>
                The Search Ends Here
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-[900] text-slate-900 tracking-tighter leading-[0.95]">
                The Search <br/>
                <span className="text-gradient">Ends Here.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-tight font-bold">
                Every Medical Book. Every Campus. Delivered. 
              </p>
              
              <p className="text-base text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold">
                Skip the bookstore hunt. Built by students who know the struggle, we deliver original textbooks directly to your university hostel—fast.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                <Link to="/shop" className="group bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-extrabold text-base flex items-center justify-center gap-3 hover:bg-plexusBlue hover:shadow-2xl hover:shadow-plexusBlue/30 transition-all transform hover:-translate-y-1">
                  Shop Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/shop?cat=Equipment" className="glass-morphism border-slate-200 text-slate-900 px-10 py-5 rounded-[2rem] font-extrabold text-base flex items-center justify-center gap-3 hover:border-plexusGreen hover:text-plexusGreen transition-all transform hover:-translate-y-1">
                  Explore Equipment <Stethoscope className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-2xl animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="relative z-10 animate-float">
                <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,84,166,0.15)] border-[12px] border-white relative">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                    alt="Nigerian Medical Student Studying" 
                    className="w-full aspect-[4/5] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-plexusBlue/40 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-plexusBlue/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-plexusGreen/10 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/Keyword Rich Section - Crucial for "Medical Textbooks Nigeria" searches */}
      <section className="py-20 bg-white/30 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Trusted by Students Nationwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale group">
            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900">MBBS Books</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900">Nursing Books</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900">MLS Equipment</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900">Anatomy Textbooks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-plexusBlue" />, title: "Original Editions Only", desc: "No more poor quality prints. We source only authentic textbooks for Nigerian medical students." },
            { icon: <Truck className="w-8 h-8 text-plexusGreen" />, title: "Nationwide Campus Delivery", desc: "From Lagos to Maiduguri, we deliver directly to your university hostel or lodge." },
            { icon: <Users className="w-8 h-8 text-plexusBlue" />, title: "Founded by Students", desc: "Built by Lawani George at Edo State University. We understand your academic needs." }
          ].map((f, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div className="glass-morphism p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all group h-full hover:-translate-y-2 border-white/80">
                <div className="bg-white w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg shadow-slate-200/50 group-hover:scale-110 transition-transform mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-[800] text-slate-900 mb-3 tracking-tight">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-semibold">{f.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-[900] text-slate-900 tracking-tighter leading-none">Vetted <br/> <span className="text-plexusBlue">Resource Catalog.</span></h2>
              <p className="text-slate-500 font-bold text-lg">Essential medical literature for every stage of your MBBS journey.</p>
            </div>
            <Link to="/shop" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-3 hover:bg-slate-900 hover:text-white transition-all shadow-sm border border-slate-100">
              Browse Shop <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {featuredBooks.map((book, idx) => (
              <RevealSection key={book.id} delay={idx * 150}>
                <BookCard book={book} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Block for Google Crawler */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl font-bold">The Leading Vendor for Medical Textbooks in Nigeria</h2>
          <p className="text-slate-400 leading-relaxed">
            MedPlexus is Nigeria's premier marketplace for medical students seeking original textbooks for Medicine, Nursing, Medical Laboratory Science, and Pharmacy. We specialize in providing essential pre-clinical and clinical books like Keith Moore Anatomy, Robbins Pathology, and Davidson's Medicine. Founded by Lawani George at Edo State University Uzairue, we bridge the gap between quality literature and student accessibility across all 36 states.
          </p>
        </div>
      </section>

      {/* Modern CTA */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-white rounded-[4rem] p-12 sm:p-24 text-center relative overflow-hidden border border-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.03)] group">
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl sm:text-6xl font-[900] text-slate-900 tracking-tighter leading-none">
              Your Journey <br/> <span className="text-gradient">Starts Here.</span>
            </h2>
            <p className="text-slate-500 text-lg font-bold">
              Join thousands of Nigerian medical students who have stopped searching and started succeeding with MedPlexus.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/shop" className="bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black hover:bg-plexusBlue transition-all shadow-2xl hover:scale-105">Shop Catalog</Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="bg-plexusGreen text-white px-12 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl shadow-plexusGreen/20">
                 <MessageSquare className="w-5 h-5" /> Buy via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};

export default Home;
