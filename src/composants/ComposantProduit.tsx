import type { typeProduit } from "../listes/listeProduits";
import Popup from "./Popup";
import { useState } from "react";
import { ChildrenEditProduit } from "./ChildrenEditProduit";

type ComposantProduitProps = {
  produit: typeProduit;
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
      className="hover:cursor-pointer flex flex-row items-start m-5 gap-3 hover:bg-red-50 p-2 border-transparent rounded-md"
    >
      <img src={produit.imageProduit} className="w-10 opacity-50" />
      <div className="flex flex-col w-full text-start">
        <div className="text-md font-semibold">{produit.nomProduit}</div>
        <div className="text-sm italic">{produit.descriptionProduit}</div>
      </div>
      <div className="text-xs text-nowrap fit mt-1.5">
        {produit.prixProduit}
      </div>
      <Popup
        isVisible={popupVisible}
        onClose={closePopup}
        children={<ChildrenEditProduit />}
        title={"Modifier produit"}
      />
    </div>
  );
}
