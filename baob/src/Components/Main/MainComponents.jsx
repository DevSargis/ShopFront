import Container from "@mui/material/Container";
import { Header } from "../Header/Header";

export default function MainComponents() {
  return (
    <Container maxWidth={false} style={{ margin: "0px", padding: "0px" }}>
      <Header />  
    </Container>
  );
}
