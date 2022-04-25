import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import Button from "@mui/material/Button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/search/hello", fetcher);

  // if (error) return <div>Error...</div>;
  // if (!data) return <div>Loading...</div>;
  // if (data.data.error)
  //   return (
  //     <div>
  //       {data?.data?.error?.code}
  //       <br />
  //       <p>{data?.data?.error?.message}</p>
  //     </div>
  //   );

  return (
    <div>
      <Head>
        <title>YouTube clone</title>
        <meta name="description" content="The classic YouTube clone." />
      </Head>

      <header>
        <Nav />
      </header>

      <main>
        <Button variant="contained">Hello World</Button>
        {/* {data.data?.items.map((item: object | any, index: number) => (
          <div key={index}>
            <Link href={`watch/${item?.id?.videoId}`} passHref>
              <a>
                <Image
                  src={item?.snippet?.thumbnails?.high?.url}
                  alt={item?.snippet?.title}
                  width={480}
                  height={360}
                />
                <p>{item?.snippet?.title}</p>
              </a>
            </Link>
          </div>
        ))} */}
      </main>
    </div>
  );
};

export default Home;
