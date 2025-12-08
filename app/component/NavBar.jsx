import { FaGamepad } from "react-icons/fa";

export default async function NavBar(data) {
  return (
    <nav className="px-6 py-4 w-dvw flex justify-between">
      <div>
        <FaGamepad size={64} />
      </div>
      <div></div>
      <div></div>
    </nav>
  );
}
