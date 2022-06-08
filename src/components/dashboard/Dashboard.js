import React, { useState, useEffect} from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar.js";

const Dashboard = () => {

  return (
      <div className="dashboard-sidebar" style={{ width: "16em" }}>
        
          <Sidebar />
       
      </div>
  );
};

export default Dashboard;
