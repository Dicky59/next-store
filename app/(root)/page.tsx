import DealCountdown from '@/components/deal-countdown';
import IconBoxes from '@/components/icon-boxes';
import ProductCarousel from '@/components/shared/product/product-carousel';
import ProductList from '@/components/shared/product/product-list';
import ViewAllProductsButton from '@/components/view-all-products-button';
import {
  getFeaturedProducts,
  getLatestProducts,
} from '@/lib/actions/product.actions';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="text-foreground">
      {featuredProducts.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-5 md:px-10">
            <ProductCarousel data={featuredProducts} />
          </div>
        </section>
      )}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-5 md:px-10">
          <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-5 md:px-10">
          <ViewAllProductsButton />
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-5 md:px-10">
          <DealCountdown />
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-5 md:px-10">
          <IconBoxes />
        </div>
      </section>
    </div>
  );
};

export default Homepage;