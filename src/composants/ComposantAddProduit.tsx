import Popup from "./Popup";
import { useState } from "react";
import { ChildrenAddProduit } from "./ChildrenAddProduit";
import { NotificationValisation } from "./NotificationValidation";

export function ComposantAddProduit() {
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
    <div className="">
      <button
        onClick={openPopup}
        className="border border-red-900 bg-red-900 py-2 px-5 rounded-4xl text-white 
      hover:bg-white hover:text-red-900 hover:cursor-pointer"
      >
        AJOUTER PRODUIT
      </button>
      <Popup
        isVisible={popupVisible}
        onClose={closePopup}
        children={
          <ChildrenAddProduit onClose={closePopup} notifStatut={openNotif} />
        }
        title="Ajouter produit"
      />
      <NotificationValisation isVisible={notifVisible} />
    </div>
  );
}
