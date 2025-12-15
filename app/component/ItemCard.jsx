export default function ItemCard({ items }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 p-4 md:px-12 flex-1">
      {items.map((item) => (
        <button
          key={item.id}
          className="p-1 rounded-lg text-white bg-slate-500 hover:ring-2 hover:ring-amber-600 hover:-translate-y-0.5 transition-all duration-300 ease-out py-1 px-1.5 md:py-1.5 md:px-2 flex flex-col justify-between h-15 md:h-20"
        >
          <h1 className="text-xs text-left md:text-lg">{item.name}</h1>
          <p className="text-[0.6rem] text-right md:text-sm">
            Rp. {item.price}
          </p>
        </button>
      ))}
    </div>
  );
}
