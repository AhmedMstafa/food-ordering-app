import React from 'react';
import { getProductsByCategory } from '@/server/db/products';
import Menu from '@/components/menu';
async function MenuPage() {
  const categories = await getProductsByCategory();
  return (
    <main>
      {categories.map((categories) => (
        <section key={categories.id} className="section-gap">
          <div className="container text-center">
            <h1 className="text-primary font-bold text-4xl italic mb-6">
              {categories.name}
            </h1>
            <Menu items={categories.products} />
          </div>
        </section>
      ))}
    </main>
  );
}

export default MenuPage;
