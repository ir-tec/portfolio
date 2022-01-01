import React from "react";

const WhiteWave = () => {
  return (
    <div
      style={{
        height: 275,
        marginTop: 65,
        overflow: "hidden",
        width: "100%",
        position: "absolute",
        top: 0,
      }}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M-82.67,140.63 C288.09,296.55 718.68,239.31 613.15,-66.59 L249.72,144.58 L-121.05,-68.56 Z"
          style={{
            stroke: "none",
            fill: "#fff",
            width: "100%",
          }}
        ></path>
      </svg>
    </div>
  );
};

export default WhiteWave;
