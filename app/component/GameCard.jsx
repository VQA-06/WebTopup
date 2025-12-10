export default function GameCard({ games }) {
  return (
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
  );
}
