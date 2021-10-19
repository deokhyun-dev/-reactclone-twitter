/* eslint-disable */

import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

console.log(authService);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Dwitter </footer>
    </>
  );
}

export default App;
