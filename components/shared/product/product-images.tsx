'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

const ProductImages = ({
  images,
  priorityMain = false,
}: {
  images: string[]
  priorityMain?: boolean
}) => {
  const [current, setCurrent] = useState(0)

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        priority={priorityMain}
        sizes="(min-width: 768px) 40vw, 100vw"
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              'border mr-2 cursor-pointer hover:border-orange-600',
              current === index && 'border-orange-500'
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
