
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Activity, Instagram, Twitter } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'How to Buy', path: '/how-to-buy-medical-textbooks' },
    { label: 'Equipment', path: '/shop?cat=Equipment' },
    { label: 'FAQs', path: '/faq' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-3 shadow-sm' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-plexusBlue p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-plexusBlue/20">
                <Activity className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-slate-900 tracking-tighter leading-none">
                  Med<span className="text-plexusBlue">Plexus</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">Premium Marketplace</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-bold tracking-tight transition-all relative group ${
                    location.pathname === item.path ? 'text-plexusBlue' : 'text-slate-600 hover:text-plexusBlue'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-plexusBlue transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-plexusGreen text-white px-7 py-3 rounded-2xl text-sm font-extrabold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-xl shadow-plexusGreen/30 hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Order
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2 bg-white/50 rounded-xl">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-morphism border-t border-slate-100 p-8 space-y-6 absolute top-full left-0 right-0 shadow-2xl animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-bold text-slate-800 hover:text-plexusBlue transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="block w-full text-center bg-plexusGreen text-white px-5 py-5 rounded-2xl font-extrabold text-lg shadow-xl shadow-plexusGreen/20"
            >
              Order on WhatsApp
            </a>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
            <div className="space-y-8">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-xl">
                  <Activity className="text-plexusGreen w-7 h-7" />
                </div>
                <span className="font-extrabold text-3xl text-white tracking-tighter">MedPlexus</span>
              </Link>
              <p className="text-base leading-relaxed text-slate-400 font-medium">
                The leading source for medical literature and professional equipment in Nigeria. Order via WhatsApp today!
              </p>
              <div className="flex space-x-4">
                {[Instagram, Twitter].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-white/5 hover:bg-plexusGreen hover:text-white rounded-xl flex items-center justify-center transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-extrabold text-lg mb-8 uppercase tracking-widest text-[13px]">Shop</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/how-to-buy-medical-textbooks" className="hover:text-plexusGreen transition-colors">How to Buy Guide</Link></li>
                <li><Link to="/shop?cat=Pre-clinical" className="hover:text-plexusGreen transition-colors">Pre-clinical Books</Link></li>
                <li><Link to="/shop?cat=Clinical" className="hover:text-plexusGreen transition-colors">Clinical Books</Link></li>
                <li><Link to="/shop?cat=Equipment" className="hover:text-plexusGreen transition-colors">Medical Equipment</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-extrabold text-lg mb-8 uppercase tracking-widest text-[13px]">Support</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/faq" className="hover:text-plexusGreen transition-colors">FAQs</Link></li>
                <li><Link to="/about" className="hover:text-plexusGreen transition-colors">About MedPlexus</Link></li>
                <li><Link to="/how-to-order" className="hover:text-plexusGreen transition-colors">How to Order</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-extrabold text-lg mb-8 uppercase tracking-widest text-[13px]">Contact</h4>
              <div className="space-y-4 text-sm font-medium">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-3 group">
                   <div className="bg-plexusGreen/20 p-2 rounded-lg group-hover:bg-plexusGreen transition-colors">
                    <MessageSquare size={18} className="text-plexusGreen group-hover:text-white" />
                   </div>
                   <span>{WHATSAPP_NUMBER}</span>
                </a>
                <p className="text-slate-400 pl-11 italic">medplexus360@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-xs text-slate-500 font-extrabold uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} MedPlexus Global Resources.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
