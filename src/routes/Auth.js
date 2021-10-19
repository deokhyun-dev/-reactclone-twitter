/* eslint-disable */

import React, { useState } from "react";

const Auth = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = e => {
    const {
      target: { name, value },
    } = e;

    console.log(target);
    console.log(target.name);
    console.log(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
