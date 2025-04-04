import Hero from './_components/Hero';
import BestSellers from './_components/BestSellers';
import { db } from '@/lib/prisma';

export default async function Home() {
  // await db.product.deleteMany();
  // await db.category.deleteMany();
  await db.size.deleteMany();
  await db.extra.deleteMany();
  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}
