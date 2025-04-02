import { Button } from '@/components/ui/button';
import Hero from './_components/Hero';
import BestSellers from './_components/BestSellers';

export function ButtonDemo() {
  return <Button>Button</Button>;
}

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}
