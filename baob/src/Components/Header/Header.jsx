import React from "react";
import { HeaderTop } from "./HeaderTop";
import { HeaderMiddle } from "./HeaderMiddle";
import { Box } from "@mui/material";
import Links from "./Links";
import CarouselComponent from "../Home/Carousel";

export const Header = () => {
  return (
    <>
      <Box sx={{padding:"0% 9%"}}>
        <HeaderMiddle />
        <Links />
        <CarouselComponent />
      </Box>
    </>
  );
};
