export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Design {
  id: string;
  name: string;
  image: string;
  category: string;
  description?: string;
}

export interface CustomizedProduct {
  product: Product;
  design: Design;
  position: {
    x: number;
    y: number;
  };
  scale: number;
}