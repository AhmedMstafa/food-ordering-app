import { db } from '@/lib/prisma';
import { cache } from '@/lib/cache';
export const getBestSellers = cache(
  (limit?: number | undefined) => {
    const bestSellers = db.product.findMany({
      where: {
        orders: {
          some: {},
        },
      },
      orderBy: {
        orders: {
          _count: 'desc',
        },
      },
      include: {
        sizes: true,
        extras: true,
      },
      take: limit,
    });
    return bestSellers;
  },
  ['best-sellers'],
  { revalidate: 3600 }
);

export const getProductsByCategory = cache(
  () => {
    const products = db.category.findMany({
      include: {
        products: {
          include: {
            sizes: true,
            extras: true,
          },
        },
      },
    });
    return products;
  },
  ['products-by-category'],
  { revalidate: 3600 }
);
