import { useContext } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";
export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;

  return (
    <div className={Common.MainContainer}>
      <h1>See how many waters You drinked</h1>
      <h3>Goal: {start.which === "liter" ? start.litre : start.gender}iter</h3>
      <div className={Common.bigCupContainer}>
        <div className={Common.waterInsideContainer}>
          <h3>{start.which === "liter" ? start.litre : start.gender}iter</h3>
          <h4>Remained</h4>
        </div>
      </div>
      <h4>Select the number of glasses you have dranked</h4>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
