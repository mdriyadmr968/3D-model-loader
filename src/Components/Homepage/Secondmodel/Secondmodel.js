import React from "react";
import { Outlet } from "react-router-dom";

const Secondmodel = () => {
  return (
    <div>
      <h1>thisis second model </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Secondmodel;
