import { useContext } from "react";
import { myContext } from "../App";

export default function Main() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  return (
    <div
      style={{
        backgroundColor:
          start.page === "thirdPage"
            ? start.backgroundColor
            : "rgb(0, 0, 0, 0.7)",
      }}
    >
      {start.litre}
    </div>
  );
}
