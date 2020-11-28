import React from "react";
import MyWeightsMain from "./myweightsmain"
import Aside from "./../wrapper/aside"
//
function MyWeightsContainer(){
  return (
    <div id="container">
      <MyWeightsMain />
      <Aside />
    </div>
  )
}
//
export default MyWeightsContainer;
