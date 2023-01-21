import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage.js";
import "./App.css";

const App = () =>{
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
      window.location.hash = "";
      setAccessToken(token);
    }

    console.log(accessToken)
  })

  return (
    <div className="app">
      {accessToken ? <h1>Successfully logined in</h1> : <LoginPage />}
    </div>
  );
}

export default App;
