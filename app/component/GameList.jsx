import Image from "next/image";
import pool from "../lib/Pool";

export default async function GameList() {
  "use server";
  const [categories] = await pool.query("select * from categories");
  const [games] = await pool.query("select * from games");

  return (
    <div className="flex flex-col w-full py-3 md:py-6 px-4 md:px-12 gap-3 md:gap-6">
      <div className="flex justify-center items-center gap-2 md:gap-4 text-black">
        {categories.map((cat) => (
          <form
            action={""}
            key={cat.id}
            className="py-0.5 px-2 rounded-full ring-1 ring-gray-400 hover:bg-amber-500 hover:text-white hover:ring-amber-600 hover:cursor-pointer flex items-center shadow-lg"
          >
            <button className="hover:cursor-pointer text-xs md:text-lg lg:text-lg">
              {cat.name}
            </button>
          </form>
        ))}
      </div>
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
            className="flex flex-col bg-cover h-30 md:h-48 rounded-2xl p-2 justify-end gap-0.5 shadow-md shadow-gray-700"
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
