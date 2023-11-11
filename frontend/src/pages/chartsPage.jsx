import React from "react";
import SideBar from "../components/sidebar";

const ChartsPage = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-1/4 flex flex-col gap-3 items-center">
        <SideBar />
      </div>
      <div className="w-3/4 flex flex-col gap-3 items-center p-5">
        <div className="mt-24 w-3/4 justify-center items-center">
          <div className="mb-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
