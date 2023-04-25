import Image from "next/image";
import { useEffect, useState } from "react";
import { LEGOCard } from "~/components/LEGOCard";
import { LEGOPartsItem } from "~/types/lego";

export default function Home() {
  const [legoData, setLegoData] = useState<LEGOPartsItem[]>();

  useEffect(() => {
    (async () => {
      const testRes = await fetch("/api/fetchLego");
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
            (item, i) =>
              item.part_img_url && (
                <li key={i}>
                  <LEGOCard item={item} />
                </li>
              )
          )}
        </ul>
      </div>
    </main>
  );
}
