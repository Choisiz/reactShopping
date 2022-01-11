import React, { useState } from "react";
import data from "../data/data";
export default function Shoes(props) {
  console.log(props.shoes[1]);
  return <>{Array.isArray(props) ? "t" : "f"}</>;
}
