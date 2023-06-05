import { useContext, useEffect } from "react";
import { myContext } from "../App";
import Warning from "./Warning";
import Common from "./Common.module.css";

import o from "../assets/button/o-solid.svg";
import x from "../assets/button/x-solid.svg";

export default function HowMany() {
  //types
  type inputDataType = {
    id: string;
    type: number;
  };
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
      id: "choice 2 L",
      type: 2,
    },
    {
      id: "choice 3 L",
      type: 3,
    },
    {
      id: "choice 4 L",
      type: 4,
    },
    {
      id: "choice 5 L",
      type: 5,
    },
  ];
  const buttonData = [
    {
      img: o,
      className: Common.buttonO,
      onClick: () => {
        start.litre === "L"
          ? changeDispatch("WarningAppeal", true)
          : changeDispatch("thirdPage");
      },
    },
    {
      img: x,
      className: Common.buttonX,
      onClick: () => changeDispatch("secondPage"),
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    changeDispatch("literOrGender", false);
  }, []);
  return (
    <>
      {start.WarningAppeal ? <Warning /> : ""}
      <div className={Common.fullyContainered}>
        <div
          className={Common.container}
          style={{
            backgroundColor: start.backgroundColor,
          }}
        >
          <div className={Common.body}>
            <h2
              style={{
                border: "3px solid white",
                borderRadius: 30,
                padding: "2px 5px 2px 5px",
              }}
            >
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
                      changeDispatch(data.type);
                    }}
                  />
                  <label
                    htmlFor={data.id}
                    style={{ fontSize: 25, cursor: "pointer" }}
                  >
                    {" "}
                    {data.type}
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
                  backgroundColor: data.payload,
                }}
                className={Common.bgColor}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
