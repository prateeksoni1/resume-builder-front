import React from "react";

const Circle = props => {
  return (
    <div
      className="bg-white div-width"
      style={{
        borderRadius: "50%",
        width: "300px",
        height: "300px",
        background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${
          props.bg
        })`,
        backgroundSize: "contain"
      }}
    >
      <h3 className="text-center font-weight-bold">{props.title}</h3>
    </div>
  );
};

export default Circle;
