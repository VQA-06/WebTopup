import { FaGamepad, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between bg-slate-900 text-xs md:text-sm z-50 sticky top-0 px-4 md:px-12 py-0.5 md:py-2 mb-5">
      <div className="flex gap-4 w-fit md:w-full pe-2">
        <Link className="flex items-center gap-2" href={"/"}>
          <FaGamepad className="w-8 h-8 md:w-[50px] md:h-[50px]" />
          <h1 className="text-sm md:text-lg">TopUp</h1>
        </Link>
        <div className="md:flex hidden items-center gap-3">
          <Link href={"/"}>Beranda</Link>
          <Link href={"/browse"}>Daftar Game</Link>
        </div>
      </div>

      <SearchBar />

      <div className="w-fit md:w-full flex justify-end gap-3 items-center ps-1.5">
        <form action="" className="hidden md:flex items-center">
          <button>
            <MdAccountCircle size={30} className="hover:cursor-pointer" />
          </button>
        </form>
        <form action="" className="hidden md:flex items-center">
          <button>
            <FaShoppingCart size={30} className="hover:cursor-pointer" />
          </button>
        </form>
      </div>

      <MobileMenu />
    </nav>
  );
}
