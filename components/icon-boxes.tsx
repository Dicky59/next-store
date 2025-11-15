import { DollarSign, Headset, ShoppingBag, WalletCards } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const IconBoxes = () => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className='grid md:grid-cols-4 gap-6 p-4'>
          <div className='space-y-2 p-4 bg-card border border-border rounded-[var(--radius)] shadow-sm'>
            <ShoppingBag className='h-6 w-6 text-primary' />
            <div className='text-sm font-semibold text-foreground'>Free Shipping</div>
            <div className='text-sm text-muted-foreground'>
              Free shipping on orders above $100
            </div>
          </div>
          <div className='space-y-2 p-4 bg-card border border-border rounded-[var(--radius)] shadow-sm'>
            <DollarSign className='h-6 w-6 text-primary' />
            <div className='text-sm font-semibold text-foreground'>Money Back Guarantee</div>
            <div className='text-sm text-muted-foreground'>
              Within 30 days of purchase
            </div>
          </div>
          <div className='space-y-2 p-4 bg-card border border-border rounded-[var(--radius)] shadow-sm'>
            <WalletCards className='h-6 w-6 text-primary' />
            <div className='text-sm font-semibold text-foreground'>Flexible Payment</div>
            <div className='text-sm text-muted-foreground'>
              Pay with credit card, PayPal or COD
            </div>
          </div>
          <div className='space-y-2 p-4 bg-card border border-border rounded-[var(--radius)] shadow-sm'>
            <Headset className='h-6 w-6 text-primary' />
            <div className='text-sm font-semibold text-foreground'>24/7 Support</div>
            <div className='text-sm text-muted-foreground'>
              Get support at any time
            </div>
          </div>
        </CardContent>
      </Card>
  );
};

export default IconBoxes;