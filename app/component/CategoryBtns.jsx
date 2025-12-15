"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CategoryBtns({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const [isActive, setActive] = useState(categories[0]?.id);

  // const currentId = searchParams.get("catId") || "1";

  const sendId = (id) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("catId", id);

    router.push(`${path}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center items-center gap-2 md:gap-4 text-black flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
            sendId(cat.id);
            setActive(cat.id);
          }}
          className={`hover:cursor-pointer text-xs md:text-lg lg:text-lg py-0.5 px-2 rounded-full hover:ring-amber-600  flex items-center shadow-lg transition-all ease-in-out duration-300 text-nowrap ${
            isActive == cat.id
              ? "ring-2 ring-amber-600 scale-105 bg-amber-500 text-white"
              : "ring-1 ring-gray-400 hover:ring-2 hover:scale-105"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
