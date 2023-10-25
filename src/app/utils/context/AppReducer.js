import React, { createContext, useContext, useReducer } from "react";
import { TYPES } from "./types";


export function appReducer(state, action) {
  switch (action.type) {
    case TYPES.SET_CLASS_TYPE:
      return { ...state, class_type: action.payload };
    case TYPES.SET_ACTION_TYPE:
      return { ...state, action_type: action.payload };
    default:
      return state;
  }
}

