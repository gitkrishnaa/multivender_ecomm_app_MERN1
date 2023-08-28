import React, { useReducer } from "react";
import CreateContext from "./CreateContext.jsx";
function Context_provider(props) {
  const ACTIONS = {
    ADD: "add",
    DECREASE: "DECREASE",
    REMOVE: "REMOVE",
  };
  let reducerFunc = (state, action) => {
    if (action.type == ACTIONS.ADD) {
      let x = { ...state };
      if (x[`${action.value}`] == undefined) {
        x[`${action.value}`] = 1;
      } else {
        x[`${action.value}`] = x[`${action.value}`] + 1;
      }
      // alert(x[`${action.value}`]);
      return x;
    }
    if (action.type == ACTIONS.DECREASE) {
      let x = { ...state };
      if (x[`${action.value}`] == 0) {
        delete x[`${action.value}`];
      } else {
        x[`${action.value}`] = x[`${action.value}`] - 1;
      }
      alert(x[`${action.value}`]);
      return x;
    }
    if (action.type == ACTIONS.REMOVE) {
      let x = { ...state };
     
        delete x[`${action.value}`];
     
      alert(x[`${action.value}`],"deleted");
      return x;
    }
  };
  const [state, dispach] = useReducer(reducerFunc, []);

  const addtocart = (e) => {
    dispach({ type: ACTIONS.ADD, value: e });
    console.log(state);
  };
  const decrease_to_cart = (e) => {
    dispach({ type: ACTIONS.DECREASE, value: e });
    console.log(state);
  };
  const remove_to_cart = (e) => {
    dispach({ type: ACTIONS.REMOVE, value: e });
    console.log(state);
  };
  const details = () => {
    alert("details");
  };

  return (
    <CreateContext.Provider value={{ addtocart, details, data:state }}>
      {props.children}
    </CreateContext.Provider>
  );
}

export default Context_provider;
