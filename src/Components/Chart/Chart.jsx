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
          src="https://www.geckoterminal.com/eth/pools/0xefb47fcfcad4f96c83d4ca676842fb03ef20a477?embed=1&info=0&swaps=0"
          frameborder="0"
          allow="clipboard-write"
          allowfullscreen
        ></iframe>

        
      </div>
    </section>
  );
};

export default Chart;
