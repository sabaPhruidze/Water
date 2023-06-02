import { useContext } from "react";
import { myContext } from "../App";

export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  return (
    <div style={{ backgroundColor: start.backgroundColor }}>{start.litre}</div>
  );
}
