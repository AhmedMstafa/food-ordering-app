import MainHeading from '@/components/main-heading';
import Menu from '@/components/menu';
const BestSellers = () => {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: 'Pizza',
      description: 'this is a pizza',
      basePrice: 12,
      image: '/assets/images/pizza.png',
    },
    {
      id: crypto.randomUUID(),
      name: 'Pizza',
      description: 'this is a pizza',
      basePrice: 12,
      image: '/assets/images/pizza.png',
    },
    {
      id: crypto.randomUUID(),
      name: 'Pizza',
      description: 'this is a pizza',
      basePrice: 12,
      image: '/assets/images/pizza.png',
    },
  ];

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
