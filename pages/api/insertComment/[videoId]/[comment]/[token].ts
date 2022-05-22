// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { videoId, comment, token } = req.query;

  const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet`, {
    method: "POST",
    headers: new Headers({
      Authorization: "Bearer " + `${token}`,
    }),
    body: JSON.stringify({
      snippet: {
        videoId: `${videoId}`,
        topLevelComment: {
          snippet: {
            textOriginal: `${comment}`,
          },
        },
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error getting data " + err);
    });

  res.status(200).json({ data: data });
};

export default handler;
