import React, { Component, useEffect, useState } from "react";

const LoginForm = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    gender: "",
    PhoneNumber: "",
    password: "",
  });

 const [errorData, setErrorData] = useState({
    name: "",
    email: "",
    gender: "",
    PhoneNumber: "",
    password: "",
  });

 function errorHandler(str){
 let regForAt=/@/g

let res=str.match(regForAt)

if(res==null || undefined ){
  setErrorData({ ...errorData, email: "invalid email as it not contain @"})
  return "false"
}

   setErrorData({ ...errorData, email: ""})

   return "true"
   }

  



  
  function handleClick(e) {
    console.log(e);
    console.log(userForm);

    // fetch("https:cloudshare/jh", {
    //   method: "POST",
    //   body: JSON.stringify(userForm),
    // })
    //   .then((res) => {
    //     console.log("We made a successfull request");
    //   })
    //   .catch((err) => {
    //     console.log(err, "Failed to send request");
    //   });
  }

  return (
    <div>
      <section>
        <label htmlFor="username">Name</label>
        <input
          type="text "
          id="username"
          data-testid="name"
          onChange={(event) =>
            setUserForm({ ...userForm, name: event.target.value })
          }
        />
      </section>

      <section>
        <label htmlFor="email">Email</label>
       <input
          type="email "
          id="email"
          data-testid="email"
          onChange={(event) =>{
            console.log(errorHandler(event.target.value))

            setUserForm({ ...userForm, email: event.target.value })
          }
          }
        />

{   errorData.email && <div> {errorData.email}</div>}
      </section>

      <section>
        <label>Gender</label>
        <select
          value={userForm.gender}
          data-testid="gender"
          onChange={(event) =>
            setUserForm({ ...userForm, gender: event.target.value })
          }
        >
          <option value="Male">Male</option>
          <option value="female">Female</option>
        </select>
      </section>

      <section>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          id="phoneNumber"
          data-testid="phoneNumber'"
          onChange={(event) =>
            setUserForm({ ...userForm, phoneNumber: event.target.value })
          }
        />
      </section>

      <section>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          data-testid="password'"

          onChange={(event) =>

            setUserForm({ ...userForm, password: event.target.value })
          }
        />
      </section>
      <section>
        <input type="submit" value="Submit" onClick={handleClick} />
      </section>
    </div>
  );
};

export default LoginForm;
