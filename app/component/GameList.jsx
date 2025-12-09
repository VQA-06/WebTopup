import Image from "next/image";
import pool from "../lib/Pool";

export default async function GameList() {
  "use server";
  const [categories] = await pool.query("select * from categories");
  const [games] = await pool.query("select * from games");

  return (
    <div className="flex flex-col w-full py-6 px-12 gap-6">
      <div className="flex justify-center items-center gap-4 text-black">
        {categories.map((cat) => (
          <form
            action={""}
            key={cat.id}
            className="py-0.5 px-2 rounded-full ring-1 ring-gray-400 hover:bg-amber-500 hover:text-white hover:ring-amber-600 hover:cursor-pointer"
          >
            <button className="hover:cursor-pointer">{cat.name}</button>
          </form>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              backgroundImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%),
                url(${game.image_url})
              `,
            }}
            className="flex flex-col bg-cover h-48 rounded-2xl p-2 justify-end gap-0.5"
          >
            <h2 className="text-shadow-lg font-bold">{game.name}</h2>
            <form
              action=""
              className="bg-white py-0.5 px-4 rounded-full text-black w-fit hover:cursor-pointer"
            >
              <button className="hover:cursor-pointer">Top Up</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
