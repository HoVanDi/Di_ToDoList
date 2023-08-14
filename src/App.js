import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Todo.css";
import Active_component from "./components/Active_component";
import Completed_component from "./components/Completed_component";
import Home_component from "./components/Home_component";
import Result_component from "./components/Result_component";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Router>
      <div className='container'>
        <div className='maincontent'>
          <div className='todo'>#todo</div>
          <div className='wrap-menu'>
            <Home_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></Home_component>
            <Active_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></Active_component>
            <Completed_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></Completed_component>
          </div>
          <Routes>
            <Route
              path='/'
              element={<Result_component activeTab={activeTab} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
