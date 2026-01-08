
export type Category = 'Pre-clinical' | 'Clinical' | 'Equipment';

export interface Textbook {
  id: string;
  title: string;
  author: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  school: string;
  comment: string;
  rating: number;
}
