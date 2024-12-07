'use client';

import { Design, Product } from '@/types';
import { useState } from 'react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import Image from 'next/image';
import { DesignCard } from './ui/design-card';
import { useToast } from '@/hooks/use-toast';
import { getStripe } from '@/lib/stripe';
import { Loader2 } from 'lucide-react';

interface ProductCustomizerProps {
  product: Product;
  designs: Design[];
}

export function ProductCustomizer({ product, designs }: ProductCustomizerProps) {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [scale, setScale] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    if (!selectedDesign) {
      toast({
        title: 'Please select a design',
        description: 'You need to choose a design before checking out',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product,
          design: selectedDesign,
          position,
          scale,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await getStripe();
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          toast({
            title: 'Error',
            description: error.message,
            variant: 'destructive',
          });
        }
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {selectedDesign && (
          <div
            className="absolute transition-all"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: `translate(-50%, -50%) scale(${scale / 100})`,
            }}
          >
            <Image
              src={selectedDesign.image}
              alt={selectedDesign.name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Select Design</h2>
          <div className="grid grid-cols-2 gap-4">
            {designs.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                selected={selectedDesign?.id === design.id}
                onClick={() => setSelectedDesign(design)}
              />
            ))}
          </div>
        </div>

        {selectedDesign && (
          <>
            <div>
              <h3 className="font-semibold mb-2">Position X</h3>
              <Slider
                value={[position.x]}
                onValueChange={([x]) => setPosition((p) => ({ ...p, x }))}
                min={0}
                max={100}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Position Y</h3>
              <Slider
                value={[position.y]}
                onValueChange={([y]) => setPosition((p) => ({ ...p, y }))}
                min={0}
                max={100}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <Slider
                value={[scale]}
                onValueChange={([s]) => setScale(s)}
                min={50}
                max={150}
              />
            </div>
          </>
        )}

        <Button 
          onClick={handleCheckout} 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Checkout - $${product.price}`
          )}
        </Button>
      </div>
    </div>
  );
}