import { useContext } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";

import o from "../assets/button/o-solid.svg";
import x from "../assets/button/x-solid.svg";

export default function HowMany() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  const bgcData = [
    {
      type: "sky",
      payload: "#1aa9d0",
    },
    {
      type: "lightBlue",
      payload: "#2488d5",
    },
    {
      type: "blue",
      payload: "#3669d5",
    },
    {
      type: "darkBlue",
      payload: "#2140a3",
    },
    {
      type: "deepBlue",
      payload: "#161f6f",
    },
  ];
  const inputData = [
    {
      context: "2 L",
      id: "choice1",
      type: "2 L",
      payload: "2 L",
    },
    {
      context: "3 L",
      id: "choice2",
      type: "3 L",
      payload: "3 L",
    },
    {
      context: "4 L",
      id: "choice3",
      type: "4 L",
      payload: "4 L",
    },
    {
      context: "5 L",
      id: "choice4",
      type: "5 L",
      payload: "5 L",
    },
  ];
  const buttonData = [
    {
      img: o,
      className: Common.buttonO,
      onClick: () => changeDispatch("thirdPage", "thirdPage"),
    },
    {
      img: x,
      className: Common.buttonX,
      onClick: () => changeDispatch("secondPage", "secondPage"),
    },
  ];
  type inputDataType = {
    context: string;
    id: string;
    type: string;
    payload: string;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div
      className={Common.container}
      style={{ backgroundColor: start.backgroundColor }}
    >
      <div className={Common.body}>
        <h2 style={{ border: "3px solid white", borderRadius: 50 }}>
          How many litres would you like to drink?
        </h2>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className={Common.inputContainer}
        >
          {inputData.map((data: inputDataType, idx: number) => (
            <div key={idx}>
              <input
                type="radio"
                id={data.id}
                name="how many"
                style={{ height: 18, cursor: "pointer" }}
                onClick={() => {
                  changeDispatch(data.type, data.payload);
                }}
              />
              <label htmlFor={data.id} style={{ fontSize: 25 }}>
                {" "}
                {data.context}
              </label>
            </div>
          ))}
        </form>
        <div className={`${Common.buttonSize} ${Common.dFlex}`}>
          {buttonData.map((data: any, idx: number) => (
            <img
              src={data.img}
              alt="button"
              key={idx}
              className={data.className}
              style={{ cursor: "pointer" }}
              onClick={data.onClick}
            />
          ))}
        </div>
      </div>
      <div className={Common.bgcChanger}>
        {bgcData.map((data: any, idx: number) => (
          <div
            onClick={() => {
              changeDispatch(data.type, data.payload);
            }}
            key={idx}
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "2px solid white",
              backgroundColor: data.payload,
              cursor: "pointer",
              marginBottom: 16,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
