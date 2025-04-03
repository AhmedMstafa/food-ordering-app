import { ProductWithRelations } from '@/lib/types/product';
import MenuItem from './MenuItem';
const Menu = ({ items }: { items: ProductWithRelations[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Menu;
