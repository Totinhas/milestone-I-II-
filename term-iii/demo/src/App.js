import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

import Input from "./components/Input";

function App() {
  const [userData, setUserData] = useState({});
  const onChangeInput = (event) =>
    setUserData({ ...userData, [event.target.id]: event.target.value });
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Input
            id="name"
            label="Your name"
            onChange={onChangeInput}
            type="text"
            value={userData.name}
          ></Input>
          <Input
            id="email"
            label="Your email"
            onChange={onChangeInput}
            type="email"
            value={userData.email}
          ></Input>

          <Input
            id="password"
            label="Your password"
            onChange={onChangeInput}
            type="password"
            value={userData.password}
          ></Input>
        </Form>
      </header>
    </div>
  );
}

export default App;
