export function ChildrenAddProduit() {
  return (
    <div className="flex flex-col gap-3">
      <div className="hover:cursor-pointer border border-dashed  rounded-full aspect-square w-20 flex justify-center items-center text-center text-xl">
        +
      </div>

      <input
        name="nomProduit"
        placeholder="Nom du produit"
        className="border rounded-sm"
      ></input>
      <input
        name="descriptionProduit"
        placeholder="Description du produit"
        className="border rounded-sm"
      ></input>
      <input
        name="prixProduit"
        placeholder="Prix du produit (30 dt)"
        className="border rounded-sm"
      ></input>
    </div>
  );
}
