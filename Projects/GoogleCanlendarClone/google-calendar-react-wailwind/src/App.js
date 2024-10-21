import React, { useState, useContext, useEffect } from "react";

import './App.css';
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  return (
    <>
        <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
        </div>
    </>
  );
}

export default App;
