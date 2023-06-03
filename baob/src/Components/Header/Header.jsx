import React from "react";
import { HeaderMiddle } from "./HeaderMiddle";
import { Box } from "@mui/material";
import Links from "./Links";
import CarouselComponent from "../Home/Carousel/Carousel";


export const Header = ({props}) => {
  return (
    <>
      <Box>
        <HeaderMiddle />
        <Links />
        {props.isHome ? <CarouselComponent /> : <div></div>}
      </Box>
    </>
  );
};
