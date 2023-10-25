"use client";

import React, { createContext, useContext, useReducer } from "react";
import { appReducer } from "./AppReducer";
import { ENUMS } from "../enums";
import { TYPES } from "./types";

const initialState = {
  class_type: ENUMS.CLASS.TEACHER,
  action_type: ENUMS.ACTIONS.VIEW,
};

export const AppContext = createContext(initialState);



export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function switchClassType(payload) {
    dispatch({ type: TYPES.SET_CLASS_TYPE, payload });
  }

  function switchActionType(payload) {
    dispatch({ type: TYPES.SET_ACTION_TYPE, payload });
  }

  return (
    <AppContext.Provider
      value={{ switchClassType, switchActionType, ...state }}
    >
      {children}
    </AppContext.Provider>
  );
}
