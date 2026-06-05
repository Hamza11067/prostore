import { Button } from "@/components/ui/button";
import ModeToggle from "./Mode-toggle";
import { Link, ShoppingCart, UserIcon } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild variant="default" className="rounded-md">
          <Link href="/signin">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default Menu;
