import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./assets/GlobalStyles";
import DataContext from "./context/dataContext.js";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Introduction from "./components/Introduction";
import HomePage from "./components/HomePage";
import ViewMonth from "./components/ViewMonth";
import ViewWeek from "./components/ViewWeek";

export default function App() {
  const [dataUser, setDataUser] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [consults, setConsults] = useState([]);
  const [dateSelected, setDateSelected] = useState(null);

  return (
    <DataContext.Provider
      value={{
        dataUser,
        setDataUser,
        isDisabled,
        setIsDisabled,
        consults,
        setConsults,
        dateSelected,
        setDateSelected,
      }}
    >
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/week" element={<ViewWeek />} />
          <Route path="/month" element={<ViewMonth />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
