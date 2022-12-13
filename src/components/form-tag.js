import React, { Component, useState } from "react";

const LoginForm = () => {
  const [userForm, setUserForm] = useState({ name: "", email: "" });
  return (
    <div>
      <form method="post" action="/">
        <section>
          <label htmlFor="username">Name</label>
          <input
            type="text "
            id="username"
            name="username"
            onChange={(event) =>
              setUserForm({ ...userForm, name: event.target.value })
            }
          />
        </section>

        <section>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) =>
              setUserForm({ ...userForm, email: event.target.value })
            }
          />
        </section>

        <section>
          <input type="submit" value="Submit" />
        </section>
      </form>
    </div>
  );
};

export default LoginForm;
