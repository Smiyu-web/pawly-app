import React from "react";
import TodayWeight from "./TodayWeight";
import Graph from "./Graph";
import AddWeight from "./AddWeight";

const Weight = () => {
  return (
    <div>
      <TodayWeight />
      <Graph />
      <AddWeight />
    </div>
  );
};

export default Weight;
