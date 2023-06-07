import { useContext, useRef, useEffect } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";

export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  const calculationRef = useRef<any>();
  const ExtraCupRef = useRef<number>(0);
  const ExtraCupRefVisually = useRef<number>(0);

  const extraCupChange = () => {
    let updatedExtraCupChanger = !start.extraCup;
    changeDispatch("extraCup", updatedExtraCupChanger);
  };

  const handleClick = (number: number) => {
    let updatedSmallCupChanger = [...start.smallCupChanger];
    function extra() {
      return start.extraCup ? 0.4 : 0;
    }
    if (!updatedSmallCupChanger[number]) {
      // If the clicked small cup is white, change the background color of small cups with index <= number to blue
      for (let i = 0; i <= number; i++) {
        updatedSmallCupChanger[i] = true;
        let changeOne =
          start.litre !== "L" ? ((number + 1) / dataSmallCups.length) * 100 : 0;
        let changeTwo =
          start.gender !== ""
            ? ((number + 1 + extra()) / (dataSmallCups.length + 0.4)) * 100 //0.4 because of the 200 ml. 200ml * 2.5 = 500ml. if (500 ml === 1) then 1 : 2.5 = 0.4
            : 0;
        calculationRef.current = changeOne || changeTwo;
      }
    } else {
      // If the clicked small cup is already blue, change its background color to white
      for (let i = number; i < updatedSmallCupChanger.length; i++) {
        updatedSmallCupChanger[i] = false;
        let changeOne =
          start.litre !== "L" && number !== 0
            ? (number / dataSmallCups.length) * 100
            : 0;
        let changeTwo =
          start.gender !== ""
            ? ((number + start.extraCupNumber + extra()) /
                (dataSmallCups.length + 0.4)) *
              100 //0.4 because of the 200 ml. 200ml * 2.5 = 500ml. if (500 ml === 1) then 1 : 2.5 = 0.4
            : 0;
        calculationRef.current = changeOne || changeTwo;
      }
    }
    changeDispatch("0", updatedSmallCupChanger);
    changeDispatch("sCClicked", updatedSmallCupChanger);
  };

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
      {!start.literOrGender ? (
        ""
      ) : (
        <div
          className={Common.ML200}
          onClick={extraCupChange}
          style={{
            backgroundColor: start.extraCup ? "blue" : "white",
            color: start.extraCup ? "white" : "blue",
          }}
        >
          200 ML
        </div>
      )}
      <div className={Common.MainContainer}>
        <h1>See how many waters You drank</h1>
        <h3>Goal: {!start.literOrGender ? start.litre : start.gender} liter</h3>
        <div className={Common.mainGlass}>
          <div className={Common.remain}>
            <h3>{!start.literOrGender ? start.litre : start.gender} L</h3>
            <h4> Remained</h4>
          </div>
          <div
            className={Common.percent}
            style={{
              height: `${calculationRef.current}%`,
            }}
          >
            {calculationRef.current} {calculationRef.current > 0 ? "%" : ""}
          </div>
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
                ? 400
                : 400,
          }}
        >
          {dataSmallCups.map((data: number, idx: number) => (
            <div
              className={`${Common.glass} ${Common.smallGlass}`}
              key={data}
              style={{
                backgroundColor: start.smallCupChanger[idx] ? "blue" : "white",
                color: start.smallCupChanger[idx] ? "white" : "blue",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                handleClick(idx);
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
