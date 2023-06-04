import { createContext, useReducer } from "react";
import "./App.css";
import Main from "./Components/Main";
import HowMany from "./Components/HowMany";
import WhatGender from "./Components/WhatGender";
export const myContext = createContext<any>("s");
// useReducer
type InitialState = {
  backgroundColor: string;
  litre: string;
  page: string;
  gender: string;
};
const initialState: InitialState = {
  backgroundColor: "#161f6f",
  litre: "2 L",
  page: "firstPage",
  gender: "man",
};
type ActionType = {
  type: string;
  payload: string;
};
const reducer = (state: any, action: ActionType) => {
  const changes = { ...state };
  switch (action.type) {
    case "sky":
    case "lightBlue":
    case "blue":
    case "darkBlue":
    case "deepBlue":
      changes.backgroundColor = action.payload;
      break;
    case "2 L":
    case "3 L":
    case "4 L":
    case "5 L":
      changes.litre = action.payload;
      break;
    case "firstPage":
    case "secondPage":
    case "thirdPage":
      changes.page = action.type;
      break;
    case "man":
    case "woman":
      changes.gender = action.payload;
      break;
    default:
      changes.backgroundColor = "#6efafc";
      changes.litre = "2 L";
      changes.page = "firstPage";
      break;
  }
  return changes;
};
// useReducer
function App() {
  // useReducer
  const [start, dispatch] = useReducer(reducer, initialState);
  const changeDispatch = (a: string, b: any) => {
    dispatch({
      type: a,
      payload: b,
    });
  };
  function whichPage() {
    switch (start.page) {
      case "firstPage":
        return (
          <>
            <HowMany />
            <Main />
          </>
        );
      case "secondPage":
        return (
          <>
            <WhatGender />
            <Main />
          </>
        );
      case "thirdPage":
        return (
          <>
            <Main />
          </>
        );
        break;
    }
  }
  // useReducer
  return (
    <myContext.Provider value={{ start, changeDispatch }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundColor: start.backgroundColor,
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            backgroundColor:
              start.page === "thirdPage"
                ? start.backgroundColor
                : "rgb(0, 0, 0, 0.6)",
          }}
        >
          {whichPage()}
        </div>
      </div>
    </myContext.Provider>
  );
}

export default App;
