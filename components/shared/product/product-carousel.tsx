'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/types';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const ProductCarousel = ({ data }: { data: Product[] }) => {
  return (
    <Carousel
      className='w-full rounded-3xl overflow-hidden shadow-elevated'
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.id}>
            <Link href={`/product/${product.slug}`}>
              <div className='relative mx-auto'>
                <Image
                  src={product.banner!}
                  alt={product.name}
                  height='0'
                  width='0'
                  sizes='100vw'
                  className='w-full h-auto object-cover rounded-3xl'
                />
                <div className='absolute inset-0 flex items-end justify-center p-6'>
                  <h2 className='h2-bold text-white text-center drop-shadow-md'>
                    {product.name}
                  </h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel