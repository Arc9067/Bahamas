import React from "react";
import "./Chart.scss";

const Chart = () => {
  return (
    <section className=" container-fluid chart-sec">
      <div className="container d-flex justify-content-center align-items-center flex-column gap-5">
        <iframe
          height="500px"
          width="100%"
          id="geckoterminal-embed"
          title="GeckoTerminal Embed"
          src="https://www.geckoterminal.com/eth/pools/0xcbcdf9626bc03e24f779434178a73a0b4bad62ed?embed=1&info=0&swaps=0"
          frameborder="0"
          allow="clipboard-write"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Chart;
