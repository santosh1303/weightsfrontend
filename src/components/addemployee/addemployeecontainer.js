import React from "react";
import AddEmployeeMain from "./addemployeemain"
import Aside from "./../wrapper/aside"
//
function AddEmployeeContainer(){
  return (
    <div id="container">
      <AddEmployeeMain />
      <Aside />
    </div>
  )
}
//
export default AddEmployeeContainer;
