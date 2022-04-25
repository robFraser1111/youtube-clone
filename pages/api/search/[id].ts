import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.KEY}&part=snippet&q=hello&type=video&maxResults=20`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error getting data " + err);
    });

  res.status(200).json({ data: data });
};

export default handler;
