import type { ReactNode } from "react";
import XIcon from "./XIcon";

type PopupProps = {
  isVisible: boolean;
  onClose?: () => void;
  children?: ReactNode;
  title?: string;
  className?: string;
};

export default function Popup(props: PopupProps) {
  const { children, title, isVisible } = props;
  if (isVisible)
    return (
      <div
        className="w-screen flex justify-center items-center fixed top-0 left-0 bg-[#000000]/50 h-screen z-1"
        onClick={props.onClose}
      >
        <div
          className="w-full md:top-20 p-2 m-10 text-justify relative bg-white border-transparent rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between ">
            {title && <b className="mb-3">{title}</b>}
            <button
              onClick={props.onClose}
              className="absolute top-3 right-2 bg-transparent border-transparent hover:cursor-pointer"
            >
              <XIcon />
            </button>
          </div>

          {children}
        </div>
      </div>
    );
}
