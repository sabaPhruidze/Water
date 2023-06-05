import { useContext, useState } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";

export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  const dataSmallCups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [filledCups, setFilledCups] = useState<number[]>([]);

  // const handleClick = (data: number) => {
  //   if (filledCups.includes(data)) {
  //     // If the cup is already filled, remove it from filledCups
  //     const updatedFilledCups = filledCups.filter((cup) => cup !== data);
  //     setFilledCups(updatedFilledCups);
  //   } else {
  //     // Fill all the cups up to the clicked cup
  //     const cupsToFill = dataSmallCups.slice(0, data);
  //     setFilledCups(cupsToFill);
  //   }
  //   changeDispatch("sCClicked", true);
  // };

  // const isCupFilled = (data: number) => {
  //   return filledCups.includes(data); // I now have an individual small cup which I clicked
  // };

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
          <div className={Common.parcentage}></div>
        </div>
        <h4 style={{ margin: "15px 0 5px 0" }}>
          Select the number of glasses you have drunk
        </h4>
        <div
          className={Common.glasses}
          style={{ width: start.litre === 2 ? 200 : 10 }} // by this logic if it is 2 then it will show 2/2 glasses ...
        >
          <div className={`${Common.glass} ${Common.smallGlass}`}>500 ML</div>
          <div className={`${Common.glass} ${Common.smallGlass}`}>500 ML</div>
          <div className={`${Common.glass} ${Common.smallGlass}`}>500 ML</div>
          <div className={`${Common.glass} ${Common.smallGlass}`}>500 ML</div>
        </div>
      </div>
    </>
  );
}
/*<div className={Common.bigCupContainer}>
        <div className={Common.waterInsideBigCupContainer}>
          <p style={{ fontSize: 20 }}>
            {!start.literOrGender ? start.litre : start.gender}iter
          </p>
          <h4>Remained</h4>
        </div>
      </div>
      <h4 style={{ margin: "15px 0 5px 0" }}>
        Select the number of glasses you have drunk
      </h4>
      <div className={Common.smallCupsContainer}>
        {dataSmallCups.map((data: number) => (
          <div
            className={Common.smallCupContainer}
            key={data}
            onClick={() => handleClick(data)}
            style={{ paddingTop: !start.smallCupChanger ? "30px" : 0 }}
          >
            {isCupFilled(data) ? (
              <div className={Common.waterInsideSmallCupContainer}>500 ML</div>
            ) : (
              <div className={Common.emptyInsideSmallCupContainer}>500 ML</div>
            )}
          </div>
        ))}
      </div> */
