import { useState } from "react";
import type { typeProduit } from "../type";
import fetchJSON from "../backend/fetchJSON";
import { useStore } from "../store";

type ChildrenEditProduitProps = {
  produit: typeProduit;
  notifDelStatut: () => void;
  notifEditStatut: () => void;
  onClose: () => void;
};
export function ChildrenEditProduit(props: ChildrenEditProduitProps) {
  const [nom, setNom] = useState(props.produit.nom);
  const [description, setDescription] = useState(props.produit.description);
  const [prix, setPrix] = useState(props.produit.prix);

  const putProduit = async () => {
    const reponse = await fetchJSON({
      url: `produits/${props.produit.documentId}`, // cible le produit existant
      method: "PUT",
      body: {
        data: {
          nom,
          description,
          prix,
          categorie: props.produit.categorie.documentId, // conserver la catégorie
        },
      },
    });
  };

  const delProduit = async () => {
    const reponse = await fetchJSON({
      url: `produits/${props.produit.documentId}`, // cible le produit existant
      method: "DELETE",
    });
  };

  const getProduits = useStore((store: any) => store.getProduits);

  const handleUpdateEdit = (e: any) => {
    // ca sert à ne pas recharger la page au submit
    e.preventDefault();
    putProduit();
    getProduits();
    props.notifEditStatut();
    props.onClose();

    return;
  };

  const handleUpdateDelete = (e: any) => {
    e.preventDefault();
    delProduit();
    getProduits();
    props.notifDelStatut();
    props.onClose();
    return;
  };
  return (
    <form onSubmit={handleUpdateEdit} className="flex flex-col gap-3">
      <div className="hover:cursor-pointer border border-dashed  rounded-full aspect-square w-20 flex justify-center items-center text-center text-xl">
        +
      </div>
      <input
        placeholder="Nom du produit"
        className="border rounded-sm px-2"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      ></input>
      <input
        placeholder="Description du produit"
        className="border rounded-sm px-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        className="border rounded-sm px-2"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        placeholder="Prix du produit"
      ></input>
      <div className="flex gap-5 justify-center">
        <button
          onClick={handleUpdateDelete}
          className="w-50 hover:cursor-pointer bg-black text-white px-3 py-1 rounded"
        >
          SUPPRIMER
        </button>
        <button
          type="submit"
          className="w-50 hover:cursor-pointer bg-black text-white px-3 py-1 rounded"
        >
          MODIFIER
        </button>
      </div>
    </form>
  );
}
