import { useContext, useState, useRef } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";

export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  const dataSmallCups =
    start.litre === 2
      ? [0, 1, 2, 3]
      : start.gender == 2.7
      ? [0, 1, 2, 3, 4]
      : start.litre === 3
      ? [0, 1, 2, 3, 4, 5]
      : start.gender == 3.7
      ? [0, 1, 2, 3, 4, 5, 6]
      : start.litre === 4
      ? [0, 1, 2, 3, 4, 5, 6, 7]
      : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {!start.literOrGender ? "" : <div className={Common.ML200}>200 ML</div>}
      <div className={Common.MainContainer}>
        <h1>See how many waters You drank</h1>
        <h3>Goal: {!start.literOrGender ? start.litre : start.gender} liter</h3>
        <div className={Common.mainGlass}>
          <div className={Common.remain}>
            <h3>{!start.literOrGender ? start.litre : start.gender} L</h3>
            <h4> Remained</h4>
          </div>
          <div className={Common.percent} style={{ height: 0 }}></div>
        </div>
        <h4 style={{ margin: "15px 0 5px 0" }}>
          Select the number of glasses you have drunk
        </h4>
        <div
          className={Common.glasses}
          style={{
            width:
              start.litre === 2
                ? 200
                : start.litre === 3
                ? 280
                : start.gender == 2.7
                ? 280
                : start.litre === 4
                ? 350
                : start.gender == 3.7
                ? 350
                : start.litre === 5
                ? "100vw"
                : "100vw",
          }} // by this logic if it is 2 then it will show 2/2 glasses ...
        >
          {dataSmallCups.map((data: number, idx: number) => (
            <div
              className={`${Common.glass} ${Common.smallGlass}`}
              key={data}
              style={{
                backgroundColor: "white",
                color: "#439de7",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              500 ML
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
