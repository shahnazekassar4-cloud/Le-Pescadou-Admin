import { Home, Menu } from "lucide-react";
import { CircleUserRound } from "lucide-react";

export function Head() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="w-screen h-10 md:h-15 bg-red-900 flex items-center justify-end pr-3 gap-3 md:gap-10">
        <a href="/karimkassar">
          <CircleUserRound
            color="white"
            strokeWidth={1}
            className="hover:cursor-pointer md:size-10"
          />
        </a>
        <a href="/menu">
          <Menu
            color="white"
            strokeWidth={1}
            className="hover:cursor-pointer md:size-10"
          />
        </a>
        <a href="/">
          <Home
            color="white"
            strokeWidth={1}
            className="hover:cursor-pointer md:size-10 md:mr-10"
          />
        </a>
      </div>
      <img src="../logoPescadou.png" className="w-60 md:w-100 m-5" />
    </div>
  );
}
