/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import Image from 'next/image';
import { formatCurrency } from '@/lib/formatters';

const sizes = [
  { id: crypto.randomUUID(), name: 'Small', price: 0 },
  { id: crypto.randomUUID(), name: 'Medium', price: 4 },
  { id: crypto.randomUUID(), name: 'Large', price: 8 },
];

const extras = [
  { id: crypto.randomUUID(), name: 'Chasse', price: 0 },
  { id: crypto.randomUUID(), name: 'Onion', price: 4 },
  { id: crypto.randomUUID(), name: 'Tomato', price: 8 },
];

function AddToCartButton({ item }: { item: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="mt-4 text-white rounded-full !px-8"
        >
          <span>Add To Cart</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex items-center">
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size " className="block">
              Pick your size
            </Label>
            <PickSize sizes={sizes} item={item} />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras" className="block">
              Any extras?
            </Label>
            <Extras extras={extras} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full h-10">
            Add to cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddToCartButton;

function PickSize({ sizes, item }: { sizes: any; item: any }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size: any) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem value="default" id={size.id} />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function Extras({ extras }: { extras: any }) {
  return extras.map((extra: any) => (
    <div
      key={extra.id}
      className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
    >
      <Checkbox id={extra.id} />
      <label
        htmlFor={extra.id}
        className="text-sm text=accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {extra.name}
      </label>
    </div>
  ));
}
