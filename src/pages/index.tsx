import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

type Lego = {
  partImg: string;
  partNum: string;
};

export default function Home() {
  const [legoData, setLegoData] = useState<Lego[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/hello");
      const resTest = await fetch("/api/test");
      const legoData = await res.json();
      const resData = await resTest.json();
      console.log("resData", resData);
      setLegoData(legoData);
    })();
  }, []);

  if (!legoData) return <Fragment />;

  // console.log("test", legoData);

  return (
    <main>
      test
      <ul className="flex flex-wrap">
        {legoData.map(
          (lego, i) =>
            lego.partImg && (
              <li className="list-none" key={i}>
                <p>{lego.partNum}</p>
                <Image
                  src={lego.partImg}
                  width={200}
                  height={200}
                  alt={`${lego.partImg}の画像`}
                  priority
                />
              </li>
            )
        )}
      </ul>
    </main>
  );
}
