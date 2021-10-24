/* eslint-disable */

import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

console.log(authService);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  setInterval(() => {
    console.log(authService.currentUser);
  }, 2000);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Dwitter </footer>
    </>
  );
}

export default App;
