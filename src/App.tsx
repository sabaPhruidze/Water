import { createContext, useReducer } from "react";
import "./App.css";
import Main from "./Components/Main";
import WhatGender from "./Components/WhatGender";
import HowMany from "./Components/HowMany";

export const myContext = createContext<any>("s");
// useReducer
const initialState = {
  backgroundColor: "#6efafc",
  litre: "2 L",
  page: "firstPage",
};

type ActionType = {
  type: string;
  payload: string;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const changes = { ...state };
  switch (action.type) {
    case "sky":
    case "lightBlue":
    case "blue":
    case "darkBlue":
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
      changes.page = action.payload;
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
  const changeDispatch = (a: string, b: string) => {
    dispatch({
      type: a,
      payload: b,
    });
  };
  // useReducer
  function Page() {
    switch (start.page) {
      case "firstPage":
        return (
          <>
            <HowMany />
            <Main />
          </>
        );
        break;
      case "secondPage":
        return (
          <>
            <WhatGender />
            <Main />
          </>
        );
        break;
      case "thirdPage":
        return (
          <>
            <Main />
          </>
        );
        break;
    }
  }
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
        {Page()}
      </div>
    </myContext.Provider>
  );
}

export default App;
