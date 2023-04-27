import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./assets/GlobalStyles";
import DataContext from "./context/dataContext.js";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Introduction from "./components/Introduction";
import HomePage from "./components/HomePage";

export default function App() {
  const [dataUser, setDataUser] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <DataContext.Provider
      value={{ dataUser, setDataUser, isDisabled, setIsDisabled }}
    >
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
