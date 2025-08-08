/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSelector } from "react-redux";
import Header from "./Header";

const ClientHeaderWrapper = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  return <Header theme={theme} />;
};

export default ClientHeaderWrapper;