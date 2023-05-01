import React from "react";
import { HeaderMiddle } from "./HeaderMiddle";
import { Box } from "@mui/material";
import Links from "./Links";
import CarouselComponent from "../Home/Carousel/Carousel";


export const Header = ({props}) => {
  return (
    <>
      <Box sx={{padding:"0% 9%"}}>
        <HeaderMiddle />
        <Links />
        {console.log(props.isHome)}
        {props.isHome ? <CarouselComponent /> : <div> Aro</div>}
      </Box>
    </>
  );
};
