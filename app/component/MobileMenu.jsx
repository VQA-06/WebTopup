"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export default function MobileMenu() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="w-fit md:w-full flex justify-end gap-3 items-center ps-1.5">
        <IoMenu
          onClick={() => setActive(!active)}
          className="w-8 h-8 md:w-[50px] md:h-[50px] md:hidden"
        ></IoMenu>
      </div>

      <div
        className={`absolute left-0 flex flex-col md:hidden bg-slate-800 top-9 w-full text-sm overflow-hidden transition-all ease-out duration-300 ${
          active ? "" : "h-0"
        }`}
      >
        <Link href={"/"} className="text-center py-2">
          Beranda
        </Link>
        <Link href={"/games"} className="text-center bg-slate-700 py-2">
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
    </div>
  );
}
