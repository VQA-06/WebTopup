import Image from "next/image";
import pool from "../lib/Pool";
import CategoryBtns from "./CategoryBtns";

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
    <div className="flex flex-col w-full py-3 md:py-6 px-4 md:px-12 gap-3 md:gap-6">
      <CategoryBtns categories={categories} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              backgroundImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%),
                url(${game.image_url})
              `,
            }}
            className="flex flex-col bg-cover h-30 md:h-48 rounded-2xl p-2 justify-end gap-0.5 shadow-md shadow-gray-700 transition-all duration-300 ease-out hover:scale-105 hover:[&>form]:bg-amber-600 hover:[&>form]:text-white"
          >
            <h2 className="text-shadow-lg font-bold text-[11px] md:text-lg">
              {game.name}
            </h2>
            <form
              action=""
              className="bg-white py-0.5 px-2.5 md:px-4 rounded-full text-black w-fit hover:cursor-pointer flex items-center"
            >
              <button className="hover:cursor-pointer text-xs">Top Up</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
