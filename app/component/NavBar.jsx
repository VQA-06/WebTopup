"use client";
import { FaGamepad, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="w-full flex justify-between bg-slate-900 text-xs md:text-sm z-50 sticky top-0 px-4 md:px-12 py-0.5 mb:py-2 mb-5">
      <div className="flex gap-4 w-fit md:w-full pe-2">
        <div className="flex items-center gap-2">
          <FaGamepad className="w-8 h-8 md:w-[50px] md:h-[50px]" />
          <h1 className="text-sm md:text-lg">TopUp</h1>
        </div>
        <div className="md:flex hidden items-center gap-3">
          <Link href={"/"}>Beranda</Link>
          <Link href={"/games"}>Daftar Game</Link>
        </div>
      </div>

      <form action="" className="flex items-center w-full">
        <input
          type="text"
          className="w-full bg-white text-black rounded-full py-0.5 px-1 md:p-1.5 text-[10px] md:text-xs focus:ring-0 focus:border-0"
        />
        <button className="relative">
          <FaSearch className="absolute right-[0.3] -top-2 p-1 md:-top-3 md:right-0.5 bg-amber-500 rounded-full hover:cursor-pointer w-4 h-4 md:w-[30px] md:h-[30px]" />
        </button>
      </form>

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
        <IoMenu
          onClick={() => setActive(!active)}
          className="w-8 h-8 md:w-[50px] md:h-[50px] md:hidden"
        ></IoMenu>
      </div>

      <div
        className={`absolute left-0 flex md:hidden flex-col bg-slate-800 top-9 w-full text-sm gap-1 overflow-hidden ${
          active ? "h-fit" : "h-0"
        }`}
      >
        <Link href={"/"} className="text-center mt-2 py-1">
          Beranda
        </Link>
        <Link href={"/games"} className="text-center bg-slate-700 py-1">
          Daftar Game
        </Link>
        <div className="flex justify-around m-4">
          <form action="" className="flex items-center">
            <button>
              <MdAccountCircle className="hover:cursor-pointer w-[25px] md:w-[30px] h-[25px] md:h-[30px]" />
            </button>
          </form>
          <form action="" className="flex items-center">
            <button>
              <FaShoppingCart className="hover:cursor-pointer w-[25px] md:w-[30px] h-[25px] md:h-[30px]" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
