import React from "react";
import "./Chart.scss";

const Chart = () => {
  return (
    <section className="hero container-fluid">
      <div className="container d-flex justify-content-center align-items-center">
        <iframe
          id="dextools-widget"
          title="DEXTools Trading Chart"
          width="500"
          height="400"
          src="https://www.dextools.io/widgets/en/bnb/pe-light/0x74e4716e431f45807dcf19f284c7aa99f18a4fbc?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
        ></iframe>
      </div>
    </section>
  );
};

export default Chart;
