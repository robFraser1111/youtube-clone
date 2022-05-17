import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Comments from "../../components/comments";
import { styled, alpha } from "@mui/material/styles";
import useSWR from "swr";

const PlayerWrapper = styled("section")(() => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  maxWidth: "2000px",
  margin: "0 auto",
  paddingTop: "40.25%",
  "& iframe": {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
    maxHeight: "calc(100vh - 169px)",
  },
}));

const head = (
  <Head>
    <title>YouTube clone</title>
    <meta name="description" content="Watch " />
  </Head>
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Watch: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/watch/${id}`, fetcher);

  console.log("video ID: " + data?.data?.items[0]?.id);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {head}
      <main>
        <PlayerWrapper>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data?.data?.items[0]?.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </PlayerWrapper>
        {id && <Comments id={id} />}
      </main>
    </>
  );
};

export default Watch;
