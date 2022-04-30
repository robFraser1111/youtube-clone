import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const data = await fetch(
    `https://accounts.google.com/o/oauth2/v2/auth?
        client_id=${process.env.KEY}&
        redirect_uri=${process.env.DOMAIN}&
        response_type=token&
        scope=https://www.googleapis.com/auth/youtube.force-ssl`,
    {
      method: "GET"
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error getting data " + err);
    });

  res.status(200).json({ data: data });
};

export default handler;
