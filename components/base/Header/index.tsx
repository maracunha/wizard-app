import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

const Header = () => (
  <header>
    <nav className="py-8">
      <Link
        href="/"
        className="my-2 flex items-center space-x-1 text-amber-500"
      >
        <HomeIcon className="h-8 w-8 flex-shrink-0 mr-3" />
        <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
          Wizard App
        </span>
      </Link>
    </nav>
  </header>
);

export default Header;
