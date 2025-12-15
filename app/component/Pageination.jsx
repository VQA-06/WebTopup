"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pageination({ totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber);
    return `${path}?${params.toString()}`;
  };

  // if (totalPages <= 1) {
  //   return null;
  // }
  return (
    <div className="flex justify-center items-center gap-4 mt-auto text-black">
      <button
        disabled={currentPage <= 1}
        onClick={() => router.push(createPageUrl(currentPage - 1))}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          currentPage <= 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"
        }`}
      >
        Prev
      </button>
      <span className="text-sm text-gray-600">
        page <b>{currentPage}</b> of <b>{totalPages}</b>
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => router.push(createPageUrl(currentPage + 1))}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          currentPage >= totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-amber-500 hover:bg-amber-600 text-white shadow-md"
        }`}
      >
        Next
      </button>
    </div>
  );
}
