import React, { useState } from "react";
import { Interweave, Markup } from "interweave";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { styled, alpha } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import useSWR from "swr";

const ariaLabel = { "aria-label": "description" };

const StyledInput = styled(Input)(() => ({
  color: "inherit",
  width: "100%",
  borderBottom: `1px solid ${grey[500]}`,
}));

const Wrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  color: "#ffffff",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
}));

const Icon = styled("img")(() => ({
  borderRadius: "100px",
  marginRight: "20px",
  fontSize: "10px",
}));

const Comment = styled("div")(() => ({
  display: "flex",
  margin: "20px 0",
}));

const SubmitComment = styled("form")(() => ({
  width: "100%",
}));

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const comments = (props: { videoId: string | string[] | undefined }) => {
  const [comment, setComment] = useState("");
  const { data: comments, error: commentsError } = useSWR(`/api/comments/${props.videoId}`, fetcher);

  // Submit comment
  const addComment = (e: any) => {
    e.preventDefault();
    console.log("Comment is " + comment);
    if (comment !== "") {
      // call api - /api/insertComment/${comment}
      const insertComment = async () => {
        const response = await fetch(`/api/insertComment/${props.videoId}/${comment}/${localStorage.getItem("access_token")}`);
        const res = await response.json();
        console.log(res);
      };

      insertComment();
    }

    setComment("");
  };

  // Update comment field
  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  // Renders JSON data as JSX
  const parseHtml = (text: string) => {
    return (
      <div>
        <Interweave content={text} />
      </div>
    );
  };

  if (commentsError) return <div>Error...</div>;
  if (!comments) return <div>Loading...</div>;

  return (
    <Wrapper>
      <SubmitComment onSubmit={addComment} action="">
        <StyledInput onChange={handleComment} value={comment} placeholder="Add a comment..." inputProps={ariaLabel} />
      </SubmitComment>

      {comments?.data?.items?.map((item: any, index: any) => (
        <Comment>
          <Icon src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt={item?.snippet?.topLevelComment?.snippet?.authorDisplayName} width="36" height="36" />
          <Typography key={index} variant="body1">
            {parseHtml(item?.snippet?.topLevelComment?.snippet?.textDisplay)}
          </Typography>
        </Comment>
      ))}
    </Wrapper>
  );
};

export default comments;
