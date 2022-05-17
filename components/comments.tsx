import React from "react";
import { Interweave, Markup } from "interweave";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import useSWR from "swr";

const Wrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
}));

const Icon = styled("img")(() => ({
  borderRadius: "100px",
  marginRight: "20px",
  color: "#ffffff",
  fontSize: "10px",
}));

const Comment = styled("div")(() => ({
  display: "flex",
  margin: "20px 0",
}));

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const comments = (props: { id: string | string[] | undefined }) => {
  const { data, error } = useSWR(`/api/comments/${props.id}`, fetcher);

  console.log("video comments: " + data?.data?.items[0]?.snippet?.topLevelComment?.snippet?.textDisplay);

  // Renders JSON data as JSX
  const parseHtml = (text: string) => {
    return (
      <div>
        <Interweave content={text} />
      </div>
    );
  };

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Wrapper>
      {data?.data?.items?.map((item: any, index: any) => (
        <Comment>
          <Icon src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt={item?.snippet?.topLevelComment?.snippet?.authorDisplayName} width="36" height="36" />
          <Typography key={index} variant="body1" sx={{ color: "#ffffff" }}>
            {parseHtml(item?.snippet?.topLevelComment?.snippet?.textDisplay)}
          </Typography>
        </Comment>
      ))}
    </Wrapper>
  );
};

export default comments;
