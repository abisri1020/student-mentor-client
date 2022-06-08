import React from "react";
import "./sidebar.css";
import {useHistory} from "react-router-dom";

const Sidebar = () => {
const history = useHistory();
  return (
    <div className="sidebar">
      <li onClick={() => history.push("/addstudent")}>
               AddStudent
      </li>
      <li onClick={() => history.push("/addmentor")}>
               AddMentor
      </li>
      <li onClick={() => history.push("/assignmentor")}>
               Assign Mentor
      </li>
      <li onClick={() => history.push("/changementor")} >
               Change Mentor
      </li>
      <li onClick={() => history.push("/showstudents")} >
               Show students for selected mentors
      </li>
    </div>
  );
};

export default Sidebar;
