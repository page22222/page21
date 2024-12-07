'use client';

import { Design } from '@/types';
import { Card } from './card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface DesignCardProps {
  design: Design;
  selected: boolean;
  onClick: () => void;
}

export function DesignCard({ design, selected, onClick }: DesignCardProps) {
  return (
    <Card
      className={cn(
        'relative cursor-pointer transition-all hover:scale-105',
        selected && 'ring-2 ring-primary'
      )}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="relative aspect-square mb-2">
          <Image
            src={design.image}
            alt={design.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="font-semibold text-sm">{design.name}</h3>
        <p className="text-xs text-muted-foreground">{design.category}</p>
        {design.description && (
          <p className="text-xs text-muted-foreground mt-1">{design.description}</p>
        )}
      </div>
    </Card>
  );
}