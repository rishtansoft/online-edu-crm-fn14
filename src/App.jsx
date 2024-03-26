import React from "react";
import Sidebar from "./sidebar/sidebar";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Guruhlar from "./pages/guruhlar";
import Ustozlar from "./pages/ustozlar";
import Yonalishlar from "./pages/yonalishlar";
import Header from "./header/header";
import Teachergroup from "./pages/teachergroup";
import Teacherprofile from "./pages/teacherprofile";

const App = () => {
  const userRole = "admin";

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar role={userRole} />
      </div>
      <div className="header">
        <Header role={userRole}/>
        <div className="components">
        {
          userRole === "admin" ?
          <Routes>
            <Route path="/" element={<Ustozlar />} />
            <Route path="/guruhlar" element={<Guruhlar />} />
            <Route path="/yonalishlar" element={<Yonalishlar />} />
          </Routes> :
          <Routes>
            <Route path="/" element={<Teachergroup/>}/>
            <Route path="/teacherprofile" element={<Teacherprofile />} />
          </Routes>
        }
        </div>
      </div>
    </div>
  );
};

export default App;
