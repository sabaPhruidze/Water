import { useContext } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";
export default function Warning() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  return (
    <div className={Common.WarningContainered}>
      <div
        className={Common.warningContainer}
        style={{ backgroundColor: start.backgroundColor }}
      >
        <h4>
          {start.ifL === false
            ? "Choose one of them or click 'X' to determine appropriate liter according to your gender"
            : "Choose one gender"}
        </h4>
        <button
          onClick={() => {
            changeDispatch("showWarning", false);
          }}
        >
          Click if you understood!
        </button>
      </div>
    </div>
  );
}
