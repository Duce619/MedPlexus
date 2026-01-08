
import { Textbook, Testimonial } from './types';

export const CATEGORIES = [
  'Pre-clinical',
  'Clinical',
  'Equipment'
];

export const TEXTBOOKS: Textbook[] = [
  // PRE-CLINICAL
  {
    id: 'pc1',
    title: "Gross and Clinically Oriented Anatomy",
    author: "Keith L. Moore",
    price: 32000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/71vKwpHqmGL._AC_UY436_FMwebp_QL65_.jpg",
    description: "The essential guide for anatomy students.",
    isFeatured: true
  },
  {
    id: 'pc2',
    title: "Junquerria Textbook of Human Histology (8th Ed.)",
    author: "Anthony Mescher",
    price: 35000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/8195wTRYSTL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Detailed histology with clinical correlations.",
    isFeatured: true
  },
  {
    id: 'pc3',
    title: "Textbook of Medical Biochemistry",
    author: "DM Vasudevan",
    price: 42000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/71c6Xd9ZrUL._SY522_.jpg",
    description: "Comprehensive biochemistry for medical students.",
    isFeatured: true
  },
  {
    id: 'pc4',
    title: "The Developing Human: Clinically Oriented Embryology",
    author: "Keith L. Moore",
    price: 38000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/81db2si9zYL._AC_UY436_FMwebp_QL65_.jpg",
    description: "The gold standard for embryology study.",
  },
  {
    id: 'pc5',
    title: "Siembulligan Essential Medical Physiology",
    author: "K. Sembulingam",
    price: 28000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/8138jvwCACL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Concise and clear physiology text.",
  },
  {
    id: 'pc6',
    title: "Cunningham Manual of Practical Anatomy (Vol 1–3)",
    author: "G.J. Romanes",
    price: 32000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/419ncOBACtL._SX342_SY445_.jpg",
    description: "Essential dissection guide for pre-clinical students.",
  },
  {
    id: 'pc7',
    title: "Frank Netter Atlas of Human Anatomy",
    author: "Frank H. Netter",
    price: 65000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/711ToC396-L._AC_UY436_FMwebp_QL65_.jpg",
    description: "The most famous anatomical atlas in the world.",
  },
  {
    id: 'pc8',
    title: "Inderbir Singh Textbook of Human Neuro Anatomy",
    author: "Inderbir Singh",
    price: 15000,
    category: 'Pre-clinical',
    image: "https://m.media-amazon.com/images/I/817nrw5ovfL._SY522_.jpg",
    description: "The most famous Neuro Anatomy textbook in the world.",
  },

  // CLINICAL
  {
    id: 'cl1',
    title: "Robbins and Cotran Pathologic Basis of Disease",
    author: "Vinay Kumar",
    price: 57000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/61HFt2ijNUL._SY522_.jpg",
    description: "The ultimate resource for pathology.",
    isFeatured: true
  },
  {
    id: 'cl2',
    title: "Clinical Biochemistry",
    author: "Martin Crooke",
    price: 28000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/81FxbQ8pkzL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Practical clinical biochemistry guide.",
    isFeatured: true
  },
  {
    id: 'cl3',
    title: "Lippincott Illustrated Reviews: Pharmacology",
    author: "Karen Whalen",
    price: 32000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/71ykj1HV6QL._AC_UY436_FMwebp_QL65_.jpg",
    description: "The preferred review for clinical pharmacology.",
    isFeatured: true
  },
  {
    id: 'cl4',
    title: "Essentials of Pharmacology",
    author: "Various Authors",
    price: 24000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/914VBroeAtL._SY522_.jpg",
    description: "Foundational pharmacology for students.",
  },
  {
    id: 'cl5',
    title: "Haematology by Hoffbrand",
    author: "Victor Hoffbrand",
    price: 15000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/81lzsdgz+XL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Comprehensive haematology text.",
  },
  {
    id: 'cl6',
    title: "Jawetz Medical Microbiology",
    author: "Geo. Brooks",
    price: 35000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/71jKhSI8lhL._SY522_.jpg",
    description: "Classic text for clinical microbiology.",
  },
  {
    id: 'cl7',
    title: "Medical Microbiology Made Ridiculously Easy",
    author: "Mark Gladwin",
    price: 18000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/81nCV+UkuJL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Simplified review for board exams.",
  },
  {
    id: 'cl8',
    title: "Macleod's Clinical Examination",
    author: "Graham Douglas",
    price: 28000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/71u9L+CljFL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Essential guide for clinical methods.",
  },
  {
    id: 'cl9',
    title: "Hutchison's Clinical Methods",
    author: "Michael Glynn",
    price: 28000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/71ZBoR4jUuL._AC_UY436_FMwebp_QL65_.jpg",
    description: "Traditional and trusted clinical methods.",
  },
  {
    id: 'cl10',
    title: "Davidson's Principles and Practice of Medicine",
    author: "Stuart Ralston",
    price: 52000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/71xEC5OCTnL._SY522_.jpg",
    description: "Internal medicine gold standard.",
  },
  {
    id: 'cl11',
    title: "Bajja 1 & 2 (Set)",
    author: "Local Experts",
    price: 22000,
    category: 'Clinical',
    image: "https://ojlinksmedical.com/wp-content/uploads/2020/12/Baja.jpg",
    description: "Clinical surgery manuals for local curriculum.",
  },
  {
    id: 'cl12',
    title: "Azubuike Paediatrics",
    author: "J.C. Azubuike",
    price: 19000,
    category: 'Clinical',
    image: "https://ojlinksmedical.com/wp-content/uploads/2020/12/azubuike.jpg",
    description: "The standard for Nigerian Paediatrics.",
  },
  {
    id: 'cl13',
    title: "Ten Teachers: Obstetrics & Gynaecology",
    author: "Louise Kenny",
    price: 32000,
    category: 'Clinical',
    image: "https://m.media-amazon.com/images/I/51XNdFcAG-L._SY445_SX342_.jpg",
    description: "Comprehensive O&G guide.",
  },

  // EQUIPMENT
  {
    id: 'eq1',
    title: "Patella Hammer",
    author: "Medical Grade",
    price: 7500,
    category: 'Equipment',
    image: "https://m.media-amazon.com/images/I/41xSj3akVKL._SX522_.jpg",
    description: "Buck hammer with needle and brush for neurological exams.",
  },
  {
    id: 'eq2',
    title: "Littmann Classic II Stethoscope",
    author: "3M Littmann",
    price: 17000,
    category: 'Equipment',
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
    description: "High acoustic sensitivity for clinical assessments.",
    isFeatured: true
  },
  {
    id: 'eq3',
    title: "Medical Measuring Tape",
    author: "Healthcare Standard",
    price: 500,
    category: 'Equipment',
    image: "https://m.media-amazon.com/images/I/71B8pe3Vb+L._SX522_.jpg",
    description: "Retractable tape for obstetric and general measurement.",
  },
  {
    id: 'eq4',
    title: "Medical Pen Torch",
    author: "Diagnostic",
    price: 4000,
    category: 'Equipment',
    image: "https://m.media-amazon.com/images/I/5106AgRlSzL._AC_SX342_SY445_QL70_ML2_.jpg",
    description: "Rechargeable LED penlight for neurological assessment.",
  },
  {
    id: 'eq5',
    title: "Medical Hair Net (Pack)",
    author: "Surgical Grade",
    price: 4500,
    category: 'Equipment',
    image: "https://m.media-amazon.com/images/I/81Okcd4fAEL._SX679_.jpg",
    description: "Disposable non-woven bouffant caps.",
  },
  {
    id: 'eq6',
    title: "Dissection Set",
    author: "Clinical Tools",
    price: 8500,
    category: 'Equipment',
    image: "https://m.media-amazon.com/images/I/71tmNiJnPGL._SX522_.jpg",
    description: "Stainless steel tools for anatomy lab.",
    isFeatured: true
  },
  {
    id: 'eq7',
    title: "Surgical Face Masks (Box)",
    author: "Sterile",
    price: 4000,
    category: 'Equipment',
    image: "https://m.media-amazon.com/images/I/81z+myk3MhL._AC_SX679_.jpg",
    description: "3-ply protective surgical masks.",
  },
  {
    id: 'eq8',
    title: "Surgical Gloves (Box)",
    author: "Latex/Nitrile",
    price: 6000,
    category: 'Equipment',
    image: "https://m.media-amazon.com/images/I/71h-OkA-qdL._AC_SX679_.jpg",
    description: "Powder-free sterile surgical gloves.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Tobi Adebayo",
    school: "Unilag (MBBS)",
    comment: "MedPlexus is life-saving. The equipment quality is top-notch and the textbooks are delivered exactly as promised. My stethoscope arrived in perfect condition!",
    rating: 5
  },
  {
    id: '2',
    name: "Chinaza Obi",
    school: "UNN (MBBS)",
    comment: "The only place I trust for original medical books in Nigeria. Customer service is professional and delivery to Enugu was remarkably fast.",
    rating: 5
  }
];

export const WHATSAPP_NUMBER = "+2348149434209";
