import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-gray-600 mb-8">
          Your payment was successful and your order is being processed.
        </p>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}