import { useContext } from "react";
import { myContext } from "../App";

export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;

  return (
    <div>
      <h1>See how many waters You drinked</h1>
      <h3>Goal: {start.page}</h3>
    </div>
  );
}
