import type { typeReseau } from "../listes/listeReseau";

type ComposantReaseauProps = { reseau: typeReseau };

export function ComposantReseau(props: ComposantReaseauProps) {
  const { reseau } = props;
  return (
    <a href={reseau.lien} target="_blank">
      <img src={reseau.icone} className="w-6"></img>
    </a>
  );
}
