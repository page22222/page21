'use client';

import { Product } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <p className="font-semibold">${product.price}</p>
        <Button
          onClick={() => router.push(`/customize/${product.id}`)}
          variant="secondary"
        >
          Customize
        </Button>
      </CardFooter>
    </Card>
  );
}