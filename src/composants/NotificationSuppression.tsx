import { OctagonX } from "lucide-react";

type NotificationSuppressionProps = {
  isVisible: boolean;
};
export function NotificationSuppression(props: NotificationSuppressionProps) {
  if (props.isVisible)
    return (
      <div className=" text-[#a20d0d] gap-2 flex items-center fixed bottom-22 left-1/2 -translate-x-1/2">
        <OctagonX size={15} color="#a20d0d " />
        <p className="text-[#a20d0d]">Le produit à été supprimé !</p>
      </div>
    );
}
