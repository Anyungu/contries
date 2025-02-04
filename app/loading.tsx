import React from "react";
import GeneralSkeleton from "./components/GeneralSkeleton";

function loading() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <GeneralSkeleton />
    </div>
  );
}

export default loading;
