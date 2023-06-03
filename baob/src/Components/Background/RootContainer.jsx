import * as React from "react";
import Container from "@mui/material/Container";
import MainComponents from "../Main/MainComponents";

export default function RootContainer() {
  return (
    <>
      <Container maxWidth={false} >
       <MainComponents/>
      </Container>
    </>
  );
}
