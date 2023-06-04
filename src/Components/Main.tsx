import { useContext } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";
export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  const dataSmallCups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handeClick = () => {
    changeDispatch("sCClicked", true);
  };
  return (
    <div className={Common.MainContainer}>
      <h1>See how many waters You drinked</h1>
      <h3>Goal: {start.which === "liter" ? start.litre : start.gender}iter</h3>
      <div className={Common.bigCupContainer}>
        <div className={Common.waterInsideBigCupContainer}>
          <p style={{ fontSize: 20 }}>
            {start.which === "liter" ? start.litre : start.gender}iter
          </p>
          <h4>Remained</h4>
        </div>
      </div>
      <h4 style={{ margin: "15px 0 5px 0" }}>
        Select the number of glasses you have dranked
      </h4>
      <div className={Common.smallCupsContainer}>
        {dataSmallCups.map((data: number) => (
          <div
            className={Common.smallCupContainer}
            key={data}
            onClick={handeClick}
            style={{ paddingTop: !start.smallCupChanger ? "30px" : 0 }}
          >
            {start.smallCupChanger === true ? (
              <>
                <div className={Common.waterInsideSmallCupContainer}>
                  500 ML
                </div>
              </>
            ) : (
              <>500 ML</>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
