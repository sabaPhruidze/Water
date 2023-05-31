import { useReducer } from "react";
import "./App.css";
import Main from "./Components/Main";
import WhatGender from "./Components/WhatGender";
import HowMany from "./Components/HowMany";

const initialState = { color: "blue" };

type ActionType = {
  type: string;
  payload: string;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const newState = { ...state };
  switch (action.type) {
    case "sky":
      newState.color = action.payload;
      return newState;
    default:
      throw new Error();
  }
};

function App() {
  const [start, dispatch] = useReducer(reducer, initialState);
  const changeDispatch = (a: string, b: string) => {
    dispatch({
      type: a,
      payload: b,
    });
  };
  return (
    <div>
      <HowMany />
      <WhatGender />
      <Main />
      <div
        style={{ backgroundColor: start.color }}
        onClick={() => {
          changeDispatch("sky", "#70f1ff");
        }}
      >
        grger
      </div>
    </div>
  );
}

export default App;
