import React, { useState } from "react";
import axios from "axios";

import {
  LoginBackground,
  LogInContainer,
  LogInContent,
  FormSubmit,
  FormH1,
  FormLabel,
  FormInput,
} from "./loginDesign";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginClicked(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        username,
        password,
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      <LoginBackground>
        <LogInContainer>
          <LogInContent>
            <FormH1> Sign into your account </FormH1>
            <FormLabel htmlFor="text"> Username </FormLabel>
            <FormInput
              type="text"
              id="username"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              required
            />
            <FormLabel htmlFor="password"> Password </FormLabel>
            <FormInput
              type="password"
              id="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              required
            />
            <FormSubmit onClick={loginClicked}> Continue </FormSubmit>
          </LogInContent>
        </LogInContainer>
      </LoginBackground>
    </>
  );
}

export default LoginPage;
