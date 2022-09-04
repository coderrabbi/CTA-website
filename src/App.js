import "./App.css";
import { Navbar, CTA, Brand } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGTP3,
} from "./containers";

function App() {
  return (
    <div className="app">
      <div className="gradiant__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
