import Header from "./Components/Header/Header";
import "./App.scss";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chart from "./Components/Chart/Chart";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hero />}></Route>
          <Route exact path="/chart" element={<Chart />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
