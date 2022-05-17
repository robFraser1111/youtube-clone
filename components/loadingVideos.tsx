import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Wrapper = styled("div")(() => ({
  width: "100%",
}));

const LoadingVideos = (props: any) => {
  // Create a list of skeletons from the amount passed in

  const skeletons = [...Array(props.amount)].map((e, i) => <Skeleton key={i} variant="rectangular" animation="wave" sx={{ bgcolor: "grey.900" }} width={320} height={280} />);

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
      {skeletons}
    </Grid>
  );
};

export default LoadingVideos;
