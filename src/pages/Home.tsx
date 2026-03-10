import "../App.css";
import { Head } from "../composants/Head";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Head />
      <div>
        {" "}
        <a
          href="/menu"
          className="border border-red-900 bg-red-900 py-2 px-5 rounded-4xl text-white 
        hover:bg-transparent hover:text-red-900 hover:cursor-pointer
        m-2.5"
        >
          MODIFIER LE MENU
        </a>
      </div>
    </div>
  );
}
