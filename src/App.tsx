import { useState } from "react";

import Design from "./components/Design";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Photography from "./components/Photography";
import StandOut from "./components/StandOut";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";
import GlobalStyle from "./styles/global";

import { Container } from './styles/App'

function App() {
  const [width, setWidth] = useState(
    document.body.clientWidth
  )

  window.onresize = () => {
    const w = document.body.clientWidth
    setWidth(w)
    console.log(width)
  }
  return (
    <>
      <GlobalStyle />
      <Header width={width} />
      <Transform width={width} />
      <StandOut width={width} />
      <Container>
        <Design width={width} />
        <Photography width={width} />
      </Container>
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
