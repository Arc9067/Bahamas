import React, { useState } from "react";
import "./Hero.scss";
import { FavoriteChart, Send2 } from "iconsax-react";
import Logo from "../assets/logo.png";
import Header from "./Header/Header";
import { Link } from "react-router-dom";

const Hero = () => {
  const [current, setCurrent] = useState(false);

  function handleHoevr() {
    setCurrent(true);
  }
  function handleLeave() {
    setCurrent(false);
  }
  return (
    <>
      <section className="hero container-fluid">
        <div className="container d-flex flex-column align-items-center justify-content-center gap-2 ">
          <h1 className="title p-2">Lorem ipsum dolor sit amet </h1>
          <h1 className="title p-2">Lorem </h1>
          <p className="info text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo
            veniam magni velit, maiores molestias, asperiores ab impedit
            blanditiis dicta repudiandae nam quasi, dolore commodi?
          </p>
          <a href="" className="button text-capitalize d-flex gap-2">
            <Send2
              color="#000"
              size={24}
              variant={current ? "Linear" : "Broken"}
              onMouseOver={handleHoevr}
              onMouseLeave={handleLeave}
            />
            Telegram
          </a>
          <img src={Logo} alt="" className="mt-3" />

          <Link to="/chart" className="button chart mt-5">
            View Chart{" "}
            <FavoriteChart size="32" color="#ffc000" variant="Bulk" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
