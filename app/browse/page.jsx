import Footer from "../component/Footer";
import GameCard from "../component/GameCard";
import NavBar from "../component/NavBar";
import pool from "../lib/Pool";

export default async function Browse({ searchParams }) {
  const params = await searchParams;
  const SQ = params?.q;

  let query = `select * from games`;

  if (SQ) {
    query += ` where name like ?`;
  }

  let gameData = [];

  try {
    const [gameRows] = await pool.query(query, "%" + SQ + "%");
    gameData = gameRows;
  } catch (e) {
    console.log("database error :", e);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="w-full py-3 md:py-6 px-4 md:px-12 gap-3 md:gap-6 flex-1">
        <GameCard games={gameData} />
      </div>
      <Footer />
    </div>
  );
}
