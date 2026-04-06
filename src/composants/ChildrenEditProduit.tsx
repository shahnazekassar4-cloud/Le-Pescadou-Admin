import { useState } from "react";
import type { typeProduit } from "../pages/Menu";
import fetchJSON from "../backend/fetchJSON";

type ChildrenEditProduitProps = {
  produit: typeProduit;
  refresh: () => void;
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

  const handleUpdate = (e: any) => {
    // ca sert à ne pas recharger la page au submit
    e.preventDefault();
    putProduit();
    props.refresh();
    return;
  };

  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-3">
      <div className="hover:cursor-pointer border border-dashed  rounded-full aspect-square w-20 flex justify-center items-center text-center text-xl">
        +
      </div>
      <input
        className="border rounded-sm"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      ></input>
      <input
        className="border rounded-sm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        className="border rounded-sm"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      ></input>
      <button
        type="submit"
        className="hover:cursor-pointer bg-black text-white p-1 rounded"
      >
        Modifier produit{" "}
      </button>
    </form>
  );
}
