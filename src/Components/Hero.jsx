import React, { useState } from "react";
import "./Hero.scss";
import { BuyCrypto, Send2 } from "iconsax-react";
import Logo from "../assets/logo.png";

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
          <h1 className="title p-2 text-capitalize">
            Say goodbye to taxes and hello
          </h1>
          <h1 className="title p-2 text-capitalize">paradise with Bahamas </h1>
          <p className="info text-center">
            Welcome to Bahamas on the Ethereum network! Enjoy the sun, sand, and
            0% tax while making your dreams come true. Dive into the world of
            decentralized finance and explore endless possibilities with us.
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

          <a href="" className="button chart mt-5">
            View Chart
            <BuyCrypto size="32" color="#ffc000" variant="Bulk" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
