type BoutonProps = { action: (e: any) => void; style: string; nom: string };
export function Bouton(props: BoutonProps) {
  return (
    <button
      onClick={props.action}
      className={`w-full hover:cursor-pointer px-3 py-1 border-2 border-black rounded-md ${props.style}`}
    >
      {props.nom}
    </button>
  );
}
