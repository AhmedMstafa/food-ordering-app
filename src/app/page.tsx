import { Button } from '@/components/ui/button';

export function ButtonDemo() {
  return <Button>Button</Button>;
}

export default function Home() {
  return (
    <main>
      <h1 className="text-primary">Hello Next js</h1>
      <Button>Hi</Button>
    </main>
  );
}
