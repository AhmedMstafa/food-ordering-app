import Hero from './_components/Hero';
import BestSellers from './_components/BestSellers';
import Contact from '@/components/contact';
import About from '@/components/about';

export default async function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <About />
      <Contact />
    </main>
  );
}
