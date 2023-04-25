import Image from "next/image";
import { LEGOPartsItem } from "~/types/lego";

type Props = {
  item: LEGOPartsItem;
};

export const LEGOCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="p-4 max-w-xs list-none rounded border-2 border-gray-300 text-center flex flex-col hover:border-black justify-center">
      <p>{item.part_num}</p>
      <Image
        className="block m-auto"
        src={item.part_img_url!}
        width={200}
        height={200}
        alt={`${item.part_img_url}の画像`}
        priority
      />
    </div>
  );
};
