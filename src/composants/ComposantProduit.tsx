import defautImg from "/imageProduitDefaut.png";
import { ChildrenEditProduit } from "./ChildrenEditProduit";
import type { typeProduit } from "../type";
import Popup from "./Popup";
import { useState } from "react";
import { NotificationSuppression } from "./NotificationSuppression";

type ComposantProduitProps = {
  produit: typeProduit;
  onSelect: () => void;
};

export function ComposantProduit(props: ComposantProduitProps) {
  const { produit } = props;

  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [notifVisible, setNotifVisible] = useState<boolean>(false);
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  const openNotif = () => {
    setNotifVisible(true);
    setTimeout(() => setNotifVisible(false), 3000);
  };

  return (
    <div
      onClick={openPopup}
      className={`flex flex-row items-start m-5 gap-3 hover:bg-red-50 p-2 border-transparent rounded-md ${popupVisible ? "cursor-default" : "hover:cursor-pointer"}`}
    >
      <img src={defautImg} className="w-10 opacity-50" />
      <div className="flex flex-col w-full text-start">
        <div className="flex justify-between">
          <div className="text-md font-semibold">{produit.nom}</div>{" "}
          <div className="text-xs text-nowrap fit mt-1.5">{produit.prix}</div>
        </div>
        <div className="text-sm italic ">{produit.description}</div>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <Popup
          isVisible={popupVisible}
          onClose={closePopup}
          children={
            <ChildrenEditProduit
              produit={produit}
              notifStatut={openNotif}
              onClose={closePopup}
            />
          }
          title={"Modifier ou supprimer le produit"}
        />{" "}
      </div>{" "}
      <NotificationSuppression isVisible={notifVisible} />
    </div>
  );
}
