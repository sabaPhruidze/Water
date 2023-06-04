import { useContext, useEffect } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";

import o from "../assets/button/o-solid.svg";

export default function WhatGender() {
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
      context: "Man",
      id: "man",
      type: "man",
      payload: "3.7 L",
    },
    {
      context: "Woman",
      id: "woman",
      type: "woman",
      payload: "2.7",
    },
  ];
  const buttonData = [
    {
      img: o,
      className: Common.buttonO,
      onClick: () => changeDispatch("thirdPage", "thirdPage"),
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
  useEffect(() => {
    changeDispatch("gender", "gender");
  }, []);
  return (
    <div className={Common.fullyContainered}>
      <div
        className={Common.container}
        style={{ backgroundColor: start.backgroundColor }}
      >
        <div className={Common.body}>
          <h2
            style={{ border: "3px solid white", borderRadius: 50, padding: 10 }}
          >
            What is your gender?
          </h2>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit}
            className={Common.inputContainer}
            style={{ justifyContent: "space-around" }}
          >
            {inputData.map((data: inputDataType, idx: number) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={data.id}
                  name="gender"
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
              className={Common.bgColor}
              key={idx}
              style={{
                backgroundColor: data.payload,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
