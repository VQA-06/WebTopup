import { FaGamepad, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";

export default function NavBar(data) {
  return (
    <nav className="w-full flex justify-between bg-slate-900 text-sm z-50 sticky top-0 px-12 py-2 mb-5">
      <div className="flex gap-4 w-full">
        <div className="flex items-center gap-2">
          <FaGamepad size={50} />
          <h1 className="text-lg">TopUp</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href={"/"}>Beranda</Link>
          <Link href={"/games"}>Daftar Game</Link>
        </div>
      </div>
      <form action="" className="flex items-center w-full">
        <input
          type="text"
          className="w-full bg-white text-black rounded-full p-2"
        />
        <button className="relative">
          <FaSearch
            size={35}
            className="absolute right-1.5 -top-3.5 p-1.5 bg-slate-900 rounded-full hover:cursor-pointer"
          />
        </button>
      </form>
      <div className="w-full flex justify-end gap-3">
        <form action="" className="flex items-center">
          <button>
            <MdAccountCircle size={30} className="hover:cursor-pointer" />
          </button>
        </form>
        <form action="" className="flex items-center">
          <button>
            <FaShoppingCart size={30} className="hover:cursor-pointer" />
          </button>
        </form>
      </div>
    </nav>
  );
}
