// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type PartsList = {
  count: number;
  next: string;
  previous: string;
  results: PartsItem[];
};

type PartsItem = {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: null;
  external_ids: { BrickLink: string[]; BrickOwl: string[] };
  print_of: null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results = [];

  try {
    for (let i = 1; i < 5; i++) {
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/parts/?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${i}`
      );
      const legoData: PartsList = await response.json();

      results.push(legoData.results.map((item) => item));
    }
  } catch (e) {
    console.log(e);
  }

  const extractionLegoData = results.flat().map((item) => item);

  res.status(200).json(extractionLegoData);
}
