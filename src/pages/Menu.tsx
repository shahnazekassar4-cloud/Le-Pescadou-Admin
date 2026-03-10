import "../App.css";
import { listeCategories } from "../listes/listeCategories";
import { Head } from "../composants/Head";
import { listeProduits } from "../listes/listeProduits";
import type { typeProduit } from "../listes/listeProduits";
import { ComposantProduit } from "../composants/ComposantProduit";
import { useState } from "react";
import { ComposantAddProduit } from "../composants/ComposantAddProduit";
import { ComposantEdit } from "../composants/ComposantEdit";
import { ChildrenEditCategories } from "../composants/ChildrenEditCategories";
import { ChildrenEditDescriptionCatégorie } from "../composants/ChildrenEditDescriptionCatégorie";

export default function Menu() {
  const [selectedCategorieId, setSelectedCategorieId] = useState<number>(2);
  const selectedCategorie = listeCategories.find(
    (categorie) => categorie.id === selectedCategorieId,
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
          />
          {listeCategories.map((categorie) => {
            return (
              <button
                onClick={() => {
                  setSelectedCategorieId(categorie.id);
                }}
                className={` border bg-red-50 rounded-md text-sm text-nowrap px-4 py-3
            hover:text-red-900 hover:border-red-900 hover:cursor-pointer
             ${
               categorie.id === selectedCategorieId
                 ? "text-red-900 border-red-900"
                 : "border-transparent bg-red-50"
             } `}
              >
                {categorie.nomCategorie}
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-auto md:mx-60">
        <div className="m-5 text-xs italic shadow-sm rounded-xl p-2 flex items-center gap-3">
          <ComposantEdit
            children={<ChildrenEditDescriptionCatégorie />}
            penSize={"12"}
            penColor={"#000000"}
            penStrokeWidth={"2"}
            popupTitle={"Modifier description catégorie"}
          ></ComposantEdit>

          <div className="w-full">
            {selectedCategorie!.descriptionCategorie}
          </div>
        </div>
        <div className="mb-20">
          {listeProduits
            .filter((produit: typeProduit) => {
              return produit.idCategorie === selectedCategorieId;
            })
            .map((produit: typeProduit) => {
              return <ComposantProduit produit={produit} />;
            })}
        </div>
      </div>
      <div className="fixed bottom-8 right-0 left-0">
        <ComposantAddProduit />
      </div>
    </div>
  );
}
