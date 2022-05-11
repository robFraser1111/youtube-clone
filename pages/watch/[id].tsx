import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { styled, alpha } from "@mui/material/styles";
import useSWR from "swr";

const PlayerWrapper = styled("section")(() => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  paddingTop: "56.25%",
  "& iframe": {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
  },
}));

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Watch: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/watch/${id}`, fetcher);

  console.log("video ID: " + data?.data?.items[0]?.id);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <PlayerWrapper>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data?.data?.items[0]?.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </PlayerWrapper>
    </main>
  );
};

export default Watch;
