import Popup from "./Popup";
import { useState, type ReactNode } from "react";
import { Pen } from "lucide-react";

type ComposantEditProps = {
  children: ReactNode;
  popupTitle: string;
  penSize: string;
  penColor: string;
  penStrokeWidth: string;
};

export function ComposantEdit(props: ComposantEditProps) {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div onClick={openPopup} className="hover:cursor-pointer">
      <Pen
        size={props.penSize}
        color={props.penColor}
        strokeWidth={props.penStrokeWidth}
      />
      <Popup
        isVisible={popupVisible}
        onClose={closePopup}
        children={props.children}
        title={props.popupTitle}
      />
    </div>
  );
}
