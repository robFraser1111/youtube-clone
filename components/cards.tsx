import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = (props: any) => {
  return (
    <Grid
      container
      spacing={2}
      rowSpacing={2}
      columnSpacing={2}
      sx={{
        justifyContent: "center",
        gap: "40px 20px",
        maxWidth: "2040px",
        margin: "0 auto",
      }}
    >
      {props.data.map((item: any, index: any) => (
        <Link key={index} href={`/watch/${item?.id?.videoId}`} passHref>
          <a>
            <Card sx={{ maxWidth: "320px", backgroundColor: "transparent" }}>
              <CardMedia
                component="img"
                image={item?.snippet?.thumbnails?.medium?.url}
                alt={item?.snippet?.title}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div" sx={{color: "#ffffff"}}>
                  {item?.snippet?.title}
                </Typography>
                <Typography variant="body2" sx={{color: "#ffffff"}}>
                  {item?.snippet?.channelTitle}
                </Typography>
              </CardContent>
            </Card>
          </a>
        </Link>
      ))}
    </Grid>
  );
};

export default MediaCard;
