import { createContext, useReducer } from "react";
import "./App.css";
import Main from "./Components/Main";
import WhatGender from "./Components/WhatGender";
import HowMany from "./Components/HowMany";

export const myContext = createContext<any>("s");
// useReducer
const initialState = { backgroundColor: "#6efafc", litre: "2 L" };

type ActionType = {
  type: string;
  payload: string;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const backgroundColor = { ...state };
  const litre = { ...state };
  switch (action.type) {
    case "sky":
      backgroundColor.backgroundColor = action.payload;
      return backgroundColor;
    case "lightBlue":
      backgroundColor.backgroundColor = action.payload;
      return backgroundColor;
    case "blue":
      backgroundColor.backgroundColor = action.payload;
      return backgroundColor;
    case "darkBlue":
      backgroundColor.backgroundColor = action.payload;
      return backgroundColor;
      break;
    default:
      backgroundColor.backgroundColor = "#6efafc";
      backgroundColor;
      break;
  }
  switch (action.type) {
    case "2 L":
      litre.litre = action.payload;
      return litre;
    case "3 L":
      litre.litre = action.payload;
      return litre;
    case "4 L":
      litre.litre = action.payload;
      return litre;
    case "5 L":
      litre.litre = action.payload;
      return litre;
      break;
    default:
      litre.litre = "2 L";
      return litre;
      break;
  }
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
        <HowMany />
        <WhatGender />
        <Main />
      </div>
    </myContext.Provider>
  );
}

export default App;
