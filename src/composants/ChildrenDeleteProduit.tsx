import { useState } from "react";
import type { typeProduit } from "../type";
import fetchJSON from "../backend/fetchJSON";
import { useStore } from "../store";
import defautImg from "/imageProduitDefaut.png";

type ChildrenDeleteProduitProps = {
  produit: typeProduit;
};
export function ChildrenDeleteProduit(props: ChildrenDeleteProduitProps) {
  const [nom, setNom] = useState(props.produit.nom);
  const [description, setDescription] = useState(props.produit.description);
  const [prix, setPrix] = useState(props.produit.prix);

  const delProduit = async () => {
    const reponse = await fetchJSON({
      url: `produits/${props.produit.documentId}`, // cible le produit existant
      method: "DELETE",
    });
  };

  const getProduits = useStore((store: any) => store.getProduits);
  const handleUpdate = (e: any) => {
    e.preventDefault();
    delProduit();
    getProduits();
    return;
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-start m-5 gap-3 p-2 border-transparent rounded-md">
        <img src={defautImg} className="w-10 opacity-50" />
        <div className="flex flex-col w-full text-start">
          <div className="flex justify-between">
            <div className="text-md font-semibold">{nom}</div>{" "}
            <div className="text-xs text-nowrap fit mt-1.5">{prix}</div>
          </div>
          <div className="text-sm italic ">{description}</div>
        </div>
      </div>
      <button
        onClick={handleUpdate}
        className="hover:cursor-pointer bg-black text-white p-1 rounded"
      >
        Supprimer produit
      </button>
    </div>
  );
}
