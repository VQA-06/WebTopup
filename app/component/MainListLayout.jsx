import Image from "next/image";
import pool from "../lib/Pool";
import CategoryBtns from "./CategoryBtns";
import GameCard from "./GameCard";

export default async function MainListLayout({ searchParams }) {
  "use server";
  const params = await searchParams;
  const selectedCat = params?.catId;

  let query = "select * from games limit 6";
  let sId = [];

  if (selectedCat && selectedCat != 1) {
    query = "select * from games where category_id = ? limit 6";

    sId.push(selectedCat);
  }

  let games = [];
  let categories = [];

  try {
    const [gamesRows] = await pool.query(query, sId);
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
    </div>
  );
}
