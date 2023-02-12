import React from "react";
import { Outlet } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1>this is not found page</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Notfound;
