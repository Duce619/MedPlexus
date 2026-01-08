
import React from 'react';
import { Heart, BookOpen, Award, GraduationCap, MapPin, User, ShieldCheck, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-24 pb-24 bg-plexus-mesh">
      {/* Hero */}
      <section className="pt-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-plexusBlue/10 text-plexusBlue px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] mb-8">
             Built by Students, for Students
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter text-center">
            The Story Behind <br/><span className="text-plexusBlue">MedPlexus.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-semibold italic">
            "We built the marketplace we wished we had when we started medical school."
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-morphism rounded-[3rem] p-12 lg:p-20 border-white shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-plexusBlue">
                <div className="bg-plexusBlue/10 p-4 rounded-2xl">
                  <User size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900">Lawani George</h2>
                  <p className="text-plexusBlue font-bold uppercase tracking-widest text-xs">Founder & CEO</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                MedPlexus was founded by <strong>Lawani George</strong>, a Medical student at <strong>Edo State University Uzairue</strong>. George realized that many of his colleagues were struggling to find authentic medical literature, often being forced to rely on blurry, low-quality photocopies that hindered their learning.
              </p>
              <div className="bg-white/50 border-l-4 border-plexusGreen p-6 rounded-r-2xl italic text-slate-700 font-semibold shadow-sm">
                "I watched brilliant students struggle not because of their minds, but because they lacked the right books. MedPlexus was born to ensure that no Nigerian medical student ever has to look further than their phone for original, high-quality resources."
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                 <div className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-white/50">
                    <GraduationCap className="text-plexusGreen" />
                    <span className="text-sm font-bold text-slate-700">Edo State University</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-white/50">
                    <MapPin className="text-plexusGreen" />
                    <span className="text-sm font-bold text-slate-700">Uzairue, Nigeria</span>
                 </div>
              </div>
            </div>
            <div className="space-y-6">
               <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl">
                 <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                   <Heart className="text-plexusGreen" /> Our Mission
                 </h3>
                 <p className="text-slate-300 leading-relaxed font-medium">
                   We are more than just a bookstore. We are a bridge that connects the classroom to the clinic. MedPlexus is dedicated to empowering the next generation of Nigerian doctors, nurses, and laboratory scientists with the tools they need to excel.
                 </p>
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-plexusBlue/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            { 
              icon: <Award className="text-plexusBlue w-10 h-10" />, 
              title: "Verified Original", 
              desc: "Every textbook in our shop is hand-vetted for authenticity and print quality." 
            },
            { 
              icon: <BookOpen className="text-plexusGreen w-10 h-10" />, 
              title: "Academic Integrity", 
              desc: "We stock only the resources recommended by Nigerian medical councils and universities." 
            },
            { 
              icon: <ShieldCheck className="text-plexusBlue w-10 h-10" />, 
              title: "By Students, For Students", 
              desc: "Our customer support team consists of medical students who understand your specific needs." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="mb-8 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
