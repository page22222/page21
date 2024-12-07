import { ProductCustomizer } from '@/components/product-customizer';
import { designs, products } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default function CustomizePage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Customize {product.name}</h1>
      <ProductCustomizer product={product} designs={designs} />
    </main>
  );
}