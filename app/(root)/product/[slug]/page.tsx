import { auth } from '@/auth';
import AddToCart from '@/components/shared/product/add-to-cart';
import ProductImages from '@/components/shared/product/product-images';
import ProductPrice from '@/components/shared/product/product-price';
import Rating from '@/components/shared/product/rating';
import { Badge } from '@/components/ui/badge';
import { getMyCart } from '@/lib/actions/cart.actions';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ReviewList from './review-list';

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const session = await auth();
  const userId = session?.user?.id;

  const cart = await getMyCart();

  return (
    <div className="text-foreground py-8 md:py-12">
      <div className="container mx-auto px-5 md:px-10">
        {/* Main Product Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Images Column */}
            <div className="bg-card border border-border rounded-[var(--radius)] shadow-sm p-4 md:p-6">
              <ProductImages images={product.images} />
            </div>

            {/* Details Column */}
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {product.brand} {product.category}
                </p>
                <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <Rating value={Number(product.rating)} />
                  <span className="text-sm text-muted-foreground">
                    {product.numReviews} reviews
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <ProductPrice value={Number(product.price)} />
                  {product.stock > 0 ? (
                    <span className="text-sm text-foreground">In Stock</span>
                  ) : (
                    <span className="text-sm text-destructive font-medium">
                      Out Of Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart Card */}
              <div className="bg-card border border-border rounded-[var(--radius)] shadow-sm p-4 md:p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Price</span>
                  <ProductPrice value={Number(product.price)} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Status</span>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out Of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="w-full">
                    <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-card border border-border rounded-[var(--radius)] shadow-sm p-6 space-y-4">
                <p className="font-semibold text-foreground">Description</p>
                <p className="text-foreground">{product.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-10 md:mt-12">
          <div className="bg-card border border-border rounded-[var(--radius)] shadow-sm p-6 space-y-4">
            <h2 className="h2-bold text-foreground">Customer Reviews</h2>
            <ReviewList
              userId={userId || ''}
              productId={product.id}
              productSlug={product.slug}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailsPage;