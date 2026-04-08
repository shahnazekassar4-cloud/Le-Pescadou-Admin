import { CircleCheck } from "lucide-react";

type NotificationValisationProps = {
  isVisible: boolean;
};
export function NotificationValisation(props: NotificationValisationProps) {
  if (props.isVisible)
    return (
      <div className=" text-[#008000] gap-2 flex items-center fixed bottom-22 left-1/2 -translate-x-1/2">
        <CircleCheck size={15} color="#008000 " />
        <p>Le produit à été ajouté !</p>
      </div>
    );
}
