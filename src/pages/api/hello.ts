// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest as Req, NextApiResponse as Res } from "next";

type PartsItem = {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: null;
  external_ids: { BrickLink: string[]; BrickOwl: string[] };
  print_of: null;
};

export default async function handler(req: Req, res: Res) {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/parts/?key=${process.env.NEXT_PUBLIC_API_KEY}&page=3`
  );

  const legoData: { results: PartsItem[] } = await response.json();

  const extractionLego = legoData.results.map((item) => {
    return { partImg: item.part_img_url, partNum: item.part_num };
  });

  res.status(200).json(extractionLego);
}
