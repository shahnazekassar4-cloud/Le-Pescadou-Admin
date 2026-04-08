import { OctagonX, PencilLine } from "lucide-react";
import { CircleCheck } from "lucide-react";

type Notif = {
  isVisible: boolean;
};
export function NotifAdd(props: Notif) {
  if (props.isVisible)
    return (
      <div className=" text-[#008000] gap-2 flex items-center fixed bottom-22 left-1/2 -translate-x-1/2">
        <CircleCheck size={15} color="#008000 " />
        <p>Le produit à été ajouté !</p>
      </div>
    );
}

export function NotifDel(props: Notif) {
  if (props.isVisible)
    return (
      <div className=" text-[#a20d0d] gap-2 flex items-center fixed bottom-22 left-1/2 -translate-x-1/2">
        <OctagonX size={15} color="#a20d0d " />
        <p className="text-[#a20d0d]">Le produit à été supprimé !</p>
      </div>
    );
}

export function NotifEdit(props: Notif) {
  if (props.isVisible)
    return (
      <div className=" text-[#a20d0d] gap-2 flex items-center fixed bottom-22 left-1/2 -translate-x-1/2">
        <PencilLine size={15} color="#ff993a " />
        <p className="text-[#ff993a]">Le produit à été modifié !</p>
      </div>
    );
}
