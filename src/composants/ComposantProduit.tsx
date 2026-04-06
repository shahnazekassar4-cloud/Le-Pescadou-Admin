import defautImg from "/imageProduitDefaut.png";
import Popup from "./Popup";
import { useState } from "react";
import { ChildrenEditProduit } from "./ChildrenEditProduit";
import type { typeProduit } from "../pages/Menu";
import { ComposantEdit } from "./ComposantEdit";

type ComposantProduitProps = {
  produit: typeProduit;
  onSelect: () => void;
  refresh: () => void;
};

export function ComposantProduit(props: ComposantProduitProps) {
  const { produit } = props;
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div
      onClick={openPopup}
      className="hover:cursor-pointer flex flex-row items-start m-5 gap-3 hover:bg-red-50 p-2 border-transparent rounded-md
     "
    >
      <img src={defautImg} className="w-10 opacity-50" />
      <div className="flex flex-col w-full text-start">
        <div className="flex justify-between">
          <div className="text-md font-semibold">{produit.nom}</div>{" "}
          <div className="text-xs text-nowrap fit mt-1.5">{produit.prix}</div>
        </div>
        <div className="text-sm italic ">{produit.description}</div>
      </div>
      <div className="mt-5 ml-5">
        {" "}
        <ComposantEdit
          penSize={"12"}
          penColor={"#000000"}
          penStrokeWidth={"2"}
        />
      </div>
      <Popup
        isVisible={popupVisible}
        onClose={closePopup}
        children={
          <ChildrenEditProduit produit={produit} refresh={props.refresh} />
        }
        title={"Modifier produit"}
      />
    </div>
  );
}
