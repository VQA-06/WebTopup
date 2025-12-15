import Image from "next/image";
import pool from "../lib/Pool";
import CategoryBtns from "./CategoryBtns";
import GameCard from "./GameCard";
import Link from "next/link";

export default async function MainListLayout({ searchParams }) {
  "use server";
  const params = await searchParams;
  const selectedCat = params?.catId;

  let query = "select * from games";
  let condition = [];
  let catId = [];

  if (selectedCat && selectedCat != 1) {
    condition.push("category_id = ?");
    catId.push(selectedCat);
  }

  if (condition.length > 0) {
    query += " where " + condition.join(" AND ");
  }

  query += " limit 8";

  let games = [];
  let categories = [];

  try {
    const [gamesRows] = await pool.query(query, catId);
    games = gamesRows;

    const [catRows] = await pool.query("SELECT * FROM categories");
    categories = catRows;
  } catch (error) {
    console.error("Database Error:", error);
  }

  return (
    <div className="flex flex-col w-full py-3 md:py-6 px-4 md:px-12 gap-3 md:gap-6 flex-1">
      <CategoryBtns categories={categories} />
      <GameCard games={games} />
      <Link
        href={"/browse"}
        className="py-0.5 bg-amber-500 rounded-md text-center font-medium text-lg font-sans md:text-xl md:py-1.5 md:font-semibold md:rounded-lg hover:bg-amber-600 transition-all duration-300 ease-out"
      >
        Browse all games
      </Link>
    </div>
  );
}
