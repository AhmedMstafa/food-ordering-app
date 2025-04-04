import MainHeading from '@/components/main-heading';
import Menu from '@/components/menu';
import { getBestSellers } from '@/server/db/products';
const BestSellers = async () => {
  const bestSellers = await getBestSellers(3);
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading subTitle="checkOut" title="Our Best Sellers" />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;
