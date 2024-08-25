import React from "react";
import { useSelector } from "react-redux";
import Test from "./Test";
import BtnSaveMovie from "./BtnSaveMovie";

const BtnForcamponentsSave = ({ resCardData }) => {
  const data = useSelector((state) => state.savemovieslice);
  return (
    <div>
      {" "}
      {data.item.find((item) => item.id === resCardData.id) ? (
        <Test resCardData={resCardData.id} structure={true} />
      ) : (
        <BtnSaveMovie data={resCardData} structure={true} />
      )}
    </div>
  );
};

export default BtnForcamponentsSave;
