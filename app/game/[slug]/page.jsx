import Footer from "@/app/component/Footer";
import ItemCard from "@/app/component/ItemCard";
import NavBar from "@/app/component/NavBar";
import pool from "@/app/lib/Pool";

export default async function TopUpPage({ params }) {
  "use server";
  const param = await params;
  const slug = param.slug;
  const [items] = await pool.query(
    "select items.* from items join games on items.game_id = games.id where games.slug = ?",
    slug
  );
  const [game] = await pool.query(
    "select name, input_type from games where slug = ?",
    slug
  );
  const gameData = game[0];
  return (
    <div className="flex flex-col min-h-dvh">
      <NavBar />
      <div className="mx-4 md:mx-12 py-3 px-4 bg-slate-300 rounded-lg md:rounded-xl text-black">
        <h1 className="font-bold font-sans text-lg md:text-2xl">
          {gameData.name}
        </h1>
        <p className="text-xs md:text-sm">Masukan Informasi Pengguna</p>
        <div
          className={`grid grid-rows-1 ${
            gameData.input_type != "id_zone"
              ? "md:grid-cols-1"
              : "md:grid-cols-2"
          } md:gap-3 py-2 md:py-3`}
        >
          {gameData.input_type === "email" && (
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white focus:ring-1 rounded-sm w-full py-0.5 md:py-1 px-1 md:px-2"
              />
            </div>
          )}

          {(gameData.input_type === "id" ||
            gameData.input_type === "id_zone") && (
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="id">User ID :</label>
              <input
                type="text"
                name="id"
                id="id"
                className="bg-white focus:ring-1 rounded-sm w-full py-0.5 md:py-1 px-1 md:px-2"
              />
            </div>
          )}

          {gameData.input_type === "id_zone" && (
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="zone">Server:</label>
              <input
                type="text"
                name="zone"
                id="zone"
                placeholder="(server)"
                className="bg-white focus:ring-1 rounded-sm w-full py-0.5 md:py-1 px-1 md:px-2"
              />
            </div>
          )}
        </div>
      </div>
      <ItemCard items={items} />
      <Footer />
    </div>
  );
}
