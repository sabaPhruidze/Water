import { useContext } from "react";
import { myContext } from "../App";
import Common from "./Common.module.css";

export default function HowMany() {
  const myContext1 = useContext(myContext);
  const { start, changeDispatch } = myContext1;
  const bgcData = [
    {
      type: "sky",
      payload: "#6efafc",
    },
    {
      type: "lightBlue",
      payload: "#2bc6c3",
    },
    {
      type: "blue",
      payload: "#1000ed",
    },
    {
      type: "darkBlue",
      payload: "#08043b",
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
  type inputDataType = {
    context: string;
    id: string;
    type: string;
    payload: string;
  };
  const handleSubmit = (e: any) => {
    e.prevetDefault();
  };
  return (
    <div
      className={Common.container}
      style={{ backgroundColor: start.backgroundColor }}
    >
      <div className={Common.body}>
        <h2>How many litres would you like to drink?</h2>
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
