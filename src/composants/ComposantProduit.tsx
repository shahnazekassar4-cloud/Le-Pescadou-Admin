import defautImg from "/imageProduitDefaut.png";
import { ChildrenEditProduit } from "./ChildrenEditProduit";
import type { typeProduit } from "../type";
import Popup from "./Popup";
import { useState } from "react";
import { NotifDel, NotifEdit } from "./Notifications";

type ComposantProduitProps = {
  produit: typeProduit;
  onSelect: () => void;
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
  const [notifDelVisible, setNotifDelVisible] = useState<boolean>(false);

  const openDelNotif = () => {
    setNotifDelVisible(true);
    setTimeout(() => setNotifDelVisible(false), 3000);
  };
  const [notifEditVisible, setNotifEditVisible] = useState<boolean>(false);

  const openEditNotif = () => {
    setNotifEditVisible(true);
    setTimeout(() => setNotifEditVisible(false), 3000);
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
              notifDelStatut={openDelNotif}
              onClose={closePopup}
              notifEditStatut={openEditNotif}
            />
          }
          title={"Modifier ou supprimer le produit"}
        />{" "}
      </div>{" "}
      <NotifDel isVisible={notifDelVisible} />{" "}
      <NotifEdit isVisible={notifEditVisible} />
    </div>
  );
}
