export type LEGOPartsItem = {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string | null;
  external_ids: { BrickLink: string[]; BrickOwl: string[] };
  print_of: null;
};
