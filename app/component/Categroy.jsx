export default async function Category() {
  async function getData() {
    const res = await fetch("http://localhost:3001/categories");
    if (!res) {
      return;
    }

    return res.json();
  }

  const category = await getData();

  return (
    <div className="flex text-black list-none gap-3 w-full justify-center p-4">
      {category.map((cat) => (
        <li
          key={cat.id}
          className="py-0.5 px-2 rounded-full ring-1 ring-gray-400 hover:bg-amber-500 hover:text-white hover:ring-amber-600"
        >
          <a href="">{cat.name}</a>
        </li>
      ))}
    </div>
  );
}
