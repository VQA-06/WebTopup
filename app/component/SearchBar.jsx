"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("q")?.toString() || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    params.delete("page");

    router.push(`/browse?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center w-full gap-2">
      <input
        type="text"
        className="w-full bg-white text-black rounded-full py-0.5 px-1 md:p-1.5 text-[10px] md:text-xs focus:ring-0 focus:border-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />
      <button
        className="relative flex items-center"
        type="button"
        onClick={handleSearch}
      >
        <FaSearch className="p-1 md:p-2 md: md:-top-3 md:right-0.5 bg-amber-500 rounded-full hover:cursor-pointer w-5 h-5 md:w-[45px] md:h-[30px]" />
      </button>
    </div>
  );
}
