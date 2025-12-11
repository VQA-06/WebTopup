import { FaGamepad, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <div className="px-4 md:px-12 py-2 md:py-6 bg-slate-900 flex flex-col items-center gap-2 text-center">
      <div className="flex items-center gap-2">
        <FaGamepad className="w-9 h-9 md:w-[60px] md:h-[60px]" />
        <h1 className="text-sm md:text-lg">TopUp</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
        odio.
      </p>
      <div className="flex gap-4">
        <FaGithub className="text-lg" />
        <MdOutlineMailOutline className="text-lg" />
        <FaWhatsapp className="text-lg" />
      </div>
    </div>
  );
}
