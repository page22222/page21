import { ProductCard } from '@/components/ui/product-card';
import { products } from '@/lib/data';

export default function Home() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Customize Your Perfect Product
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}