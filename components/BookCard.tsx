
import React from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';
import { Textbook } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface BookCardProps {
  book: Textbook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20"${encodeURIComponent(book.title)}"%20by%20${encodeURIComponent(book.author)}. Is it available?`;

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,84,166,0.12)] transition-all duration-500 flex flex-col h-full group">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
        <img 
          src={book.image} 
          alt={book.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
           <button className="bg-white/90 backdrop-blur-md text-slate-900 px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
             <ExternalLink size={14} /> Quick View
           </button>
        </div>
      </div>
      
      <div className="p-5 sm:p-7 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-extrabold text-plexusBlue uppercase tracking-[0.2em] bg-blue-50 px-2 py-1 rounded-md">
            {book.category}
          </span>
        </div>
        
        <h3 className="font-extrabold text-slate-900 leading-[1.3] mb-2 line-clamp-2 text-base sm:text-lg group-hover:text-plexusBlue transition-colors min-h-[3rem]">
          {book.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-6 font-semibold italic">By {book.author}</p>
        
        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Price</span>
            <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">₦{book.price.toLocaleString()}</span>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-plexusGreen text-white px-5 py-2.5 rounded-2xl text-xs font-extrabold hover:bg-slate-900 transition-all shadow-lg shadow-plexusGreen/20 hover:shadow-none"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
