import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Product } from "@/types"
import Image from "next/image"
import Link from "next/link"
import ProductPrice from "./product-price"
import Rating from "./rating"

const ProductCard = ({
  product,
  priority = false,
}: {
  product: Product
  priority?: boolean
}) => {
  const image = product.images?.[0]

  return (
    <Card
      className="
        group w-full max-w-sm
        overflow-hidden
        bg-card text-foreground
        border border-border
        rounded-[var(--radius)]
        shadow-sm transition-shadow duration-300
        hover:shadow-lg
      "
    >
      <CardHeader
        className="
          p-0
          relative aspect-square w-full
          overflow-hidden
          bg-muted/40
          flex-center
        "
      >
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          {image && (
            <Image
              src={image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={priority}
              className="
                object-cover
                transition-transform duration-300
                group-hover:scale-[1.03]
              "
            />
          )}
        </Link>
      </CardHeader>

      <CardContent className="p-4 grid gap-3">
        {/* Brand */}
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {product.brand}
        </div>

        {/* Name */}
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium line-clamp-2">
            {product.name}
          </h2>
        </Link>

        {/* Rating + Price / Stock */}
        <div className="flex-between gap-4">
          <Rating value={Number(product.rating)} />

          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-xs font-medium text-destructive">
              Out of stock
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
