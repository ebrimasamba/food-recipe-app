import React from "react";

const Container = ({ className, children }) => {
  return <div className={`container px-4 ${className}`}>{children}</div>;
};

export default Container;
