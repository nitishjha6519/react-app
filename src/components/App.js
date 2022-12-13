import React, { Component, useState } from "react";
import "../styles/App.css";
import Heading from "./Heading.js";
import InputQuery from "./InputQuery.js";
import SubHeading from "./SubHeading.js";
import SubmitButton from "./SubmitButton.js";
import Formtag from "./form-tag.js"
import LoginForm from "./Login-form-fetch";
import UserSideEffect from "./sideEffect1"
import LoginFormFetch from "./LoginForm.js"
import SideEffectDependency from "./sideEffectDependency.js"

const App = () => {
  return (
   <div id="main">
    {/*   <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
      <Formtag/>
      <LoginForm /> 
      <UserSideEffect />
      <LoginFormFetch/> */}
      <SideEffectDependency/>
    </div>
  );
};

export default App;
