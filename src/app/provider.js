"use client";

import React from "react";
import { AppProvider } from "./utils/context/AppContext";

function Provider({ children }) {
  return <AppProvider>{children}</AppProvider>;
}

export default Provider;
