import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Interweave, Markup } from "interweave";
import Head from "next/head";
import Cards from "../../components/cards";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Search: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/search/${id}`, fetcher);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  const head = (
    <Head>
      <title>YouTube clone</title>
      <meta name="description" content="The classic YouTube clone." />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  );

  const loading = (
    <>
      <Skeleton variant="rectangular" animation="wave" sx={{ bgcolor: "grey.900" }} width={320} height={280} />
      <Skeleton variant="rectangular" animation="wave" sx={{ bgcolor: "grey.900" }} width={320} height={280} />
      <Skeleton variant="rectangular" animation="wave" sx={{ bgcolor: "grey.900" }} width={320} height={280} />
      <Skeleton variant="rectangular" animation="wave" sx={{ bgcolor: "grey.900" }} width={320} height={280} />
    </>
  );

  // Renders JSON data as JSX
  const parseHtml = (text: string) => {
    return (
      <div>
        <Interweave content={text} />
      </div>
    );
  };

  return (
    <>
      {head}
      <Container maxWidth={false} disableGutters={true}>
        <main>
          <section style={{ margin: "40px" }}>
            <Typography align="center" variant="h4" sx={{ color: "#ffffff" }}>
              {data?.data?.hasOwnProperty("error") ? parseHtml(data?.data?.error?.message) : null}
              {!data && loading}
              {error && <div>Error. Try reloading the page.</div>}
            </Typography>
            {data && <Cards data={data?.data?.items} />}
          </section>
        </main>
      </Container>
    </>
  );
};

export default Search;
