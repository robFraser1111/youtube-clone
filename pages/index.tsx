import type { NextPage } from "next";
import * as React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Cards from "../components/cards";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import Container from "@mui/material/Container";
import { useEffect } from "react";

const testResponse = {
  kind: "youtube#searchListResponse",
  etag: "Kc-CT6T2iNY5srk3X7BUdl4mNwk",
  nextPageToken: "CAUQAA",
  regionCode: "AU",
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "T4KfK7D6bPTy1nKHDzSat_3izec",
      id: {
        kind: "youtube#video",
        videoId: "9ADmfeVpDrA",
      },
      snippet: {
        publishedAt: "2018-01-03T09:32:02Z",
        channelId: "UCv41ean41z5cRWdHiK5YvEw",
        title:
          "Akshay Kumar becomes an RJ | Padman on Mumbai &amp; Sanitation | Radio Mirchi",
        description:
          "Watch what happens when the reel Padman Akshay Kumar becomes our Morning Jock on Radio Mirchi. Jeeturaaj ka Proxy Yaar ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/9ADmfeVpDrA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/9ADmfeVpDrA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/9ADmfeVpDrA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Filmy Mirchi",
        liveBroadcastContent: "none",
        publishTime: "2018-01-03T09:32:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "WJMC74fcRfEOZAsdw4uL2g6Hj58",
      id: {
        kind: "youtube#video",
        videoId: "RbJg7YLqJk8",
      },
      snippet: {
        publishedAt: "2022-02-12T00:17:02Z",
        channelId: "UCvbKGLFg-bgjWvAglehxOFw",
        title:
          "Summer Music Deep • 24/7 Live Radio | Best Relax House, Chillout, Study, Running, Happy Music",
        description:
          "Summer Music Deep is live streaming the best of Deep & Tropical House, Chill & Relax House Music, EDM, Dance & Pop as well ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/RbJg7YLqJk8/default_live.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/RbJg7YLqJk8/mqdefault_live.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/RbJg7YLqJk8/hqdefault_live.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Summer Music Deep",
        liveBroadcastContent: "live",
        publishTime: "2022-02-12T00:17:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "8Q0gw3AWnTEZnZud3quv9Zs4nmo",
      id: {
        kind: "youtube#video",
        videoId: "a_4e6AqQP7o",
      },
      snippet: {
        publishedAt: "2014-07-11T04:00:01Z",
        channelId: "UCv41ean41z5cRWdHiK5YvEw",
        title: "RJ Naved in &#39;Murga and Election Result&#39;",
        description:
          "Pushpak Rangrasiya aka RJ Naved ne banaya politician ko bakra! Kya hoga politician ka reaction, watch this yeh super- hilarious ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/a_4e6AqQP7o/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/a_4e6AqQP7o/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/a_4e6AqQP7o/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Filmy Mirchi",
        liveBroadcastContent: "none",
        publishTime: "2014-07-11T04:00:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Bb1RVZJU_yPyWFXGwk9kBlim68A",
      id: {
        kind: "youtube#video",
        videoId: "G3Ot8lh_2QE",
      },
      snippet: {
        publishedAt: "2020-11-24T05:34:34Z",
        channelId: "UCNO4dUilYfOikKlcbk5uBTg",
        title:
          "Iraj - Percocet Feat. Stevie Stone &amp; Dizzy Wright | Official Audio",
        description:
          "JuiceWrld #MacMiller Album - With U Produced By - Iraj Music - Iraj Vocals - Marcus ( USA ) Lyrics - Marcus ( USA ) Chorus ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/G3Ot8lh_2QE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/G3Ot8lh_2QE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/G3Ot8lh_2QE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "IRAJ",
        liveBroadcastContent: "none",
        publishTime: "2020-11-24T05:34:34Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "84uEuW2xadKGbg-cG7VXf8-YSug",
      id: {
        kind: "youtube#video",
        videoId: "G9lcsGf-pWg",
      },
      snippet: {
        publishedAt: "2020-03-08T04:10:57Z",
        channelId: "UCv41ean41z5cRWdHiK5YvEw",
        title:
          "Radhika Madan reacts on Angrezi Medium trailer comments | Comment Reaction | Mirchi Prerna",
        description:
          "Radhika Madan & Deepak Dobriyal are here in the mirchi studio to react on the Angrezi Medium trailer comments.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/G9lcsGf-pWg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/G9lcsGf-pWg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/G9lcsGf-pWg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Filmy Mirchi",
        liveBroadcastContent: "none",
        publishTime: "2020-03-08T04:10:57Z",
      },
    },
  ],
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/default", fetcher);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    // setSearching(true);

    // // Check if search term matches a name in the array
    // setTimeout(function () {
    //   const newData = data.filter((item: { name: string }) =>
    //     item.name.includes(e.target.value.toLowerCase())
    //   );

    //   // Set filtered data to new array if search result contains any pokemon
    //   if (newData.length > 0) {
    //     setFilteredData(newData);
    //   } else {
    //     setFilteredData(initItem);
    //   }

    //   // Reset filtered data if there's no search term
    //   if (e.target.value === "") {
    //     setFilteredData(initItem);
    //   }

    //   // Error checking
    //   if (e.target.value.length > 0 && newData.length === 0) {
    //     setSearchError(true);
    //   } else {
    //     setSearchError(false);
    //   }

    //   setSearching(false);
    // }, 1500);
  };

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;
  if (data.data.error)
    return (
      <div>
        {data?.data?.error?.code}
        <br />
        <p>{data?.data?.error?.message}</p>
      </div>
    );

  return (
    <>
      <Head>
        <title>YouTube clone</title>
        <meta name="description" content="The classic YouTube clone." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container maxWidth={false} disableGutters={true}>
        <Nav handleSearch={handleSearch} />
        <main>
          <section style={{ margin: "40px" }}>
            <Cards data={data.data.items} />
          </section>
        </main>
      </Container>
    </>
  );
};

export default Home;
