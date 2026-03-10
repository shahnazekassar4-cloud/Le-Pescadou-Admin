import type { typeCoordonnees } from "../listes/listeCoordonees";
type ComposantCoordonneesProps = { coordonnees: typeCoordonnees };

export function ComposantCoordonnees(props: ComposantCoordonneesProps) {
  const { coordonnees } = props;
  return (
    <div className="flex flex-row items-center gap-3">
      <div> {coordonnees.icone}</div>
      <div className="text-[14px]"> {coordonnees.info}</div>
    </div>
  );
}
