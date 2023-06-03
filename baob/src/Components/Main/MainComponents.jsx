import Container from "@mui/material/Container";
import { Header } from "../Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { LoginComponent } from "../Login/LoginComponent";
import { RegisterComponent } from "../Register/RegisterComponent";

export default function MainComponents() {
  return (
    <Router>
      <Container maxWidth={false} style={{ margin: "0px", padding: "0% 9%" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Header props={{ isHome: true }} />
            </>
          } />
          <Route path="/shop" element={<Header props={{ isHome: false }} />} />
          <Route path="/product" element={<Header props={{ isHome: true }} />} />
          <Route path="/about" element={<Header props={{ isHome: true }} />} />
          <Route path="/home" element={<Header props={{ isHome: true }} />} />
          <Route path="/login" element={
            <>
              <Header props={{ isHome: false }} />
              <LoginComponent />
            </>
          } />
          <Route path="/register" element={
            <>
              <Header props={{ isHome: false }} />
              <RegisterComponent />
            </>
          } />
          <Route path="*" element={<Header props={{ isHome: true }} />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}
