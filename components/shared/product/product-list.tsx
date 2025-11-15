import { Product } from '@/types'
import ProductCard from './product-card'

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[]
  title?: string
  limit?: number
}) => {
  const limitedData = limit ? data.slice(0, limit) : data

  return (
    <div className="text-foreground py-10 md:py-16">
      {title && <h2 className="h2-bold mb-6 md:mb-8">{title}</h2>}
      {data.length > 0 ? (
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {limitedData.map((product: Product, index: number) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index === 0}
            />
          ))}
        </div>
      ) : (
        <div className="py-8 md:py-12">
          <p className="text-muted-foreground text-center">No products found</p>
        </div>
      )}
    </div>
  )
}

export default ProductList
