import CategoryBtns from "../component/CategoryBtns";
import Footer from "../component/Footer";
import GameCard from "../component/GameCard";
import NavBar from "../component/NavBar";
import Pageination from "../component/Pageination";
import pool from "../lib/Pool";

export default async function Browse({ searchParams }) {
  const params = await searchParams;
  const SQ = params?.q || "";
  const SC = params?.catId;

  const page = Number(params?.page) || 1;
  const limit = 12;
  const offset = (page - 1) * limit;

  // let query = `select * from games`;
  let condition = [];
  let sqlParam = [];

  if (SQ) {
    condition.push("name like ?");
    sqlParam.push("%" + SQ + "%");
  }

  if (SC && SC != 1) {
    condition.push("category_id = ?");
    sqlParam.push(SC);
  }

  // if (condition.length > 0) {
  //   query += " where " + condition.join(" AND ");
  // }

  const whereClause =
    condition.length > 0 ? " where " + condition.join(" and ") : "";

  let gameData = [];
  let categories = [];
  let totalPages = 0;

  try {
    const [catRows] = await pool.query("select * from categories");
    categories = catRows;

    const countQuery = `select count(*) as total from games` + whereClause;
    const [countResult] = await pool.query(countQuery, sqlParam);

    const totalItems = countResult[0].total;
    totalPages = Math.ceil(totalItems / limit);

    const dataQuery = `select * from games` + whereClause + ` limit ? offset ?`;

    const dataParams = [...sqlParam, limit, offset];

    const [gameRows] = await pool.query(dataQuery, dataParams);
    gameData = gameRows;
  } catch (e) {
    console.log("database error :", e);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="w-full py-3 md:py-6 px-4 md:px-12 gap-3 md:gap-6 flex-1 flex flex-col">
        <CategoryBtns categories={categories} selectedCategory={SC} />
        {gameData.length === 0 ? (
          <h1 className="text-center text-black font-semibold font-sans text-xl md:text-2xl">
            Game "{SQ}" tidak di temukan
          </h1>
        ) : (
          <>
            <GameCard games={gameData} />
            <Pageination totalPages={totalPages} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
