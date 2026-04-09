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
        className="w-screen flex justify-center items-center fixed top-0 left-0 bg-[#000000]/50 h-screen z-50"
        onClick={props.onClose}
      >
        <div
          className="w-150 md:top-20 p-5 m-10 relative bg-white border-transparent rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center">
            {title && <b className="mb-3">{title}</b>}
            <button
              onClick={props.onClose}
              className="absolute top-6 right-5 bg-transparent border-transparent hover:cursor-pointer"
            >
              <XIcon />
            </button>
          </div>

          {children}
        </div>
      </div>
    );
}
