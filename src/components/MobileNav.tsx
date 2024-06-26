// @ts-nocheck
import { Link } from "react-router-dom";

function MobileNav({ setClicked }) {
  return (
    <div className=" bg-black-primary flex flex-col gap-8 fixed h-ful z-10 top-0 right-0 py-8 pl-10 pr-28">
      <div onClick={() => setClicked((prev) => !prev)}>
        <div className="w-6 h-1 bg-white rounded-full rotate-45 translate-y-1"></div>
        <div className="w-6 h-1 bg-white rounded-full -rotate-45"></div>
      </div>
      <div>
        <ul className="text-white flex gap-8 font-medium text-sm flex-col">
          <li className="cursor-pointer hover:underline">Download</li>
          <li className="cursor-pointer hover:underline">Nitro</li>
          <li className="cursor-pointer hover:underline">Safety</li>
          <li className="cursor-pointer hover:underline">Support</li>
          <li className="cursor-pointer hover:underline">Blog</li>
          <li className="cursor-pointer hover:underline">Careers</li>
        </ul>
      </div>
      <div>
        <Link
          to="/login"
          className="px-3 py-2 rounded-full bg-white text-black font-Inter text-sm hover:drop-shadow-2xl hover:text-blue-primary"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
