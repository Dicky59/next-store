import Link from 'next/link';
import { Button } from './ui/button';

const ViewAllProductsButton = () => {
  return (
    <div className='flex justify-center items-center'>
      <Button asChild size="lg" className='px-8 py-4 text-lg font-semibold rounded-full'>
        <Link href='/search'>View All Products</Link>
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;