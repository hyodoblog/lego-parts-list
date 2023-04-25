import Image from "next/image";
import { useEffect, useState } from "react";

type PartsItem = {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: null;
  external_ids: { BrickLink: string[]; BrickOwl: string[] };
  print_of: null;
};

export default function Home() {
  const [legoData, setLegoData] = useState<PartsItem[]>();

  useEffect(() => {
    (async () => {
      const testRes = await fetch("/api/test");
      const testData = await testRes.json();
      setLegoData(testData);
    })();
  }, []);

  if (!legoData) return <div>ローディング中です。。。。</div>;

  return (
    <main>
      <div className="p-8">
        <ul className="grid justify-center grid-cols-8 gap-3">
          {legoData.map(
            (lego, i) =>
              lego.part_img_url && (
                <li
                  className="p-4 max-w-xs list-none rounded border-2 border-gray-300 text-center flex flex-col justify-center"
                  key={i}
                >
                  <p>{lego.part_num}</p>
                  <Image
                    className="block m-auto"
                    src={lego.part_img_url}
                    width={200}
                    height={200}
                    alt={`${lego.part_img_url}の画像`}
                    priority
                  />
                </li>
              )
          )}
        </ul>
      </div>
    </main>
  );
}
