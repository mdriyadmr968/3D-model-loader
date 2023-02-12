import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-left">
      <div>
        <h1>Click on a image to load 3d model </h1>
      </div>
      <div className="home-right">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
