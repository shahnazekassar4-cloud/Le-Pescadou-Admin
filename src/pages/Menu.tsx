import "../App.css";
import { Head } from "../composants/Head";
import { ComposantProduit } from "../composants/ComposantProduit";
import { useState } from "react";
import { ComposantEdit } from "../composants/ComposantEdit";
import { ChildrenEditCategories } from "../composants/ChildrenEditCategories";
import { ChildrenEditDescriptionCatégorie } from "../composants/ChildrenEditDescriptionCatégorie";
import { useEffect } from "react";
import fetchJSON from "../backend/fetchJSON";
import type { typeCategorie, typeProduit } from "../type";
import { useStore } from "../store";
import { ComposantAddProduit } from "../composants/ComposantAddProduit";

export default function Menu() {
  // CATEGORIES
  const [categories, setCategories] = useState<typeCategorie[]>([]);
  const produits = useStore((store: any) => store.produits);
  const getProduits = useStore((store: any) => store.getProduits);

  useEffect(() => {
    const getCategories = async () => {
      // nécessaire avant un await
      const reponse = await fetchJSON({
        // tout ce qui est après attend
        url: "categories", //ca va tapper dans http:localhost:1337/api/produits | tu peux aller voir dans fetchJSON si tu veux voir comment ca marche
        method: "GET",
      });
      setCategories(reponse.data);
      setSelectedCategorieId(reponse.data[0].documentId);
    };
    getCategories();
    getProduits();
  }, []);

  // filtre
  const [selectedCategorieId, setSelectedCategorieId] = useState<
    string | undefined
  >(undefined);
  const selectedCategorie = categories.find(
    (categorie) => String(categorie.documentId) === selectedCategorieId,
  );

  // selection produit
  const [selectedProduit, setSelectedProduit] = useState<typeProduit | null>(
    null,
  );

  return (
    <div className="w-full">
      <div className="sticky top-0 bg-white z-1">
        <Head />
        <div className="items-center font-semibold md:justify-center w-full flex gap-3 overflow-auto py-3 shadow-md px-3 -mt-5">
          <ComposantEdit
            children={<ChildrenEditCategories />}
            penSize={"20"}
            penColor={"#742a2a"}
            penStrokeWidth={"2"}
            popupTitle={"Modifier catégories"}
          />{" "}
          {categories
            ?.sort((a: any, b: any) => a.nom.localeCompare(b.nom))
            .map((categorie: typeCategorie) => {
              return (
                <button
                  onClick={() => {
                    setSelectedCategorieId(String(categorie.documentId));
                  }}
                  className={` border bg-red-50 rounded-md text-sm text-nowrap px-4 py-3
            hover:text-red-900 hover:border-red-900 hover:cursor-pointer
             ${
               String(categorie.documentId) === selectedCategorieId
                 ? "text-red-900 border-red-900"
                 : "border-transparent bg-red-50"
             } `}
                >
                  {categorie.nom}
                </button>
              );
            })}
        </div>
      </div>

      <div className="overflow-auto md:mx-60">
        <div className="m-5 text-xs italic shadow-sm rounded-xl p-2 flex items-center gap-3">
          <div className="w-full">{selectedCategorie?.description}</div>
          <ComposantEdit
            children={<ChildrenEditDescriptionCatégorie />}
            penSize={"12"}
            penColor={"#000000"}
            penStrokeWidth={"2"}
            popupTitle={"Modifier description catégorie"}
          />
        </div>
        <div className="mb-20">
          {produits
            ?.filter((produit: typeProduit) => {
              return produit.categorie?.documentId === selectedCategorieId;
            })
            .sort((a: any, b: any) => a.nom.localeCompare(b.nom))
            .map((produit: typeProduit) => {
              return (
                <ComposantProduit
                  produit={{
                    documentId: produit.documentId,
                    nom: produit.nom,
                    description: produit.description,
                    prix: produit.prix,
                    image: produit.image,
                    categorie: {
                      documentId: produit.categorie.documentId,
                      nom: produit.categorie.nom,
                    },
                  }}
                  onSelect={() => setSelectedProduit(produit)}
                />
              );
            })}
        </div>
      </div>
      <div className="fixed bottom-8 right-0 left-0">
        <ComposantAddProduit />
      </div>
    </div>
  );
}
