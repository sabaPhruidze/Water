import { createContext, useReducer } from "react";
import "./App.css";
import Main from "./Components/Main";
import HowMany from "./Components/HowMany";
import WhatGender from "./Components/WhatGender";
export const myContext = createContext<any>("s");

// typescript
type InitialState = {
  backgroundColor: string;
  litre: string | number;
  WarningAppeal: boolean;
  page: string;
  gender: string;
  literOrGender: boolean;
  smallCupChanger: boolean;
  showWarning: boolean;
};
type ActionType = {
  type: string | boolean | number;
  payload: string | boolean | number;
};
// typescript

// useReducer
const initialState: InitialState = {
  backgroundColor: "#161f6f",
  litre: "L",
  WarningAppeal: false,
  page: "firstPage",
  gender: "",
  literOrGender: false,
  smallCupChanger: false,
  showWarning: false,
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
    case 2:
    case 3:
    case 4:
    case 5:
      changes.litre = action.type;
      break;
    case "firstPage":
    case "secondPage":
    case "thirdPage":
      changes.page = action.type;
      break;
    case 3.7:
    case 2.7:
      changes.gender = action.type;
      break;
    case "literOrGender":
      changes.literOrGender = action.payload;
      break;
    case "sCClicked": //small cup not clicked and clicked
      changes.smallCupChanger = action.payload;
      break;
    case "showWarning":
      changes.showWarning = action.payload;
      break;
    case "WarningAppeal":
      changes.WarningAppeal = action.payload;
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
  const changeDispatch = (a: string, b?: any) => {
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
          backgroundColor: start.backgroundColor,
        }}
        className="fullyContainered"
      >
        {whichPage()}
      </div>
    </myContext.Provider>
  );
}

export default App;
