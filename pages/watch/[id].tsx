import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Watch: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/watch/${id}`, fetcher);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <Head>
        <title>YouTube clone</title>
        <meta name="description" content="The classic YouTube clone." />
      </Head>

      <main>
        <h1>Video</h1>

        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${data?.data?.items[0]?.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </main>

      <footer></footer>
    </div>
  );
};

export default Watch;
