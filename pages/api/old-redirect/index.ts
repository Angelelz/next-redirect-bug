import { NextApiResponse, NextApiRequest } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.redirect(307, "/redirected");
}
