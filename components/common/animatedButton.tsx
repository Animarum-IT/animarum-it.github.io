"use client;";
import React from "react";

const AnimatedButton = ({ text }: { text: string }) => {
  return (
    <>
      <span className="btn-animate-y">
        <span className="btn-animate-y-1">
          {text} <i aria-hidden="true" className="mi-arrow-right" />
        </span>
        <span aria-hidden="true" className="btn-animate-y-2">
          {text} <i aria-hidden="true" className="mi-arrow-right" />
        </span>
      </span>
    </>
  );
};

export default AnimatedButton;
