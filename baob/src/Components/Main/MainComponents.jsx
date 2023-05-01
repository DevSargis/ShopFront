import Container from "@mui/material/Container";
import { Header } from "../Header/Header";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export default function MainComponents() {
  return (
    <Router>
      <Container maxWidth={false} style={{ margin: "0px", padding: "0px" }}>
        <Routes>
          <Route path="/" element={
          <>
          <Header props={{isHome:true}}/>
          <Footer/>
          </>
          }/>
          <Route path="/shop" element={<Header props={{isHome:false}}/>}/>
          <Route path="/product" element={<Header props={{isHome:true}}/>}/>
          <Route path="/about" element={<Header props={{isHome:true}}/>}/>
          <Route path="/home" element={<Header props={{isHome:true}}/>}/>
          <Route path="*" element={<Header props={{isHome:true}}/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
