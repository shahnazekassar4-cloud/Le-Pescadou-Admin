import { useEffect, useState } from "react";
import fetchJSON from "../backend/fetchJSON";

export function ChildrenAddProduit() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");

  const postProduit = async (e: any) => {
    e.preventDefault();
    const reponse = await fetchJSON({
      url: "produits",
      method: "POST",
      body: {
        data: {
          nom,
          description,
          prix,
          categorie: selectedCategorie,
        },
      },
    });
    // reset
    setNom("");
    setDescription("");
    setPrix("");
    setSelectedCategorie(undefined);
  };

  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategorie, setSelectedCategorie] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    const getCategories = async () => {
      const reponse = await fetchJSON({
        url: "categories",
        method: "GET",
      });
      setCategories(reponse.data);
    };
    getCategories();
  }, []);

  return (
    <form onSubmit={postProduit} className="flex flex-col gap-3">
      <div className="hover:cursor-pointer border border-dashed  rounded-full aspect-square w-20 flex justify-center items-center text-center text-xl">
        +
      </div>
      <input
        placeholder="Nom du produit"
        className="border rounded-sm"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      ></input>
      <input
        placeholder="Description du produit"
        className="border rounded-sm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        placeholder="Prix du produit (30 dt)"
        className="border rounded-sm"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      ></input>
      <select
        value={selectedCategorie ?? ""}
        onChange={(e) => setSelectedCategorie(e.target.value)}
        className="border rounded-sm"
      >
        <option value="" disabled>
          Choisir une catégorie
        </option>
        {categories.map((cat) => (
          <option key={cat.documentId} value={cat.documentId}>
            {cat.nom}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="hover:cursor-pointer bg-black text-white p-1 rounded"
      >
        Ajouter produit
      </button>
    </form>
  );
}
