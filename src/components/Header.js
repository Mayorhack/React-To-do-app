import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ onclick, showAddTask }) => {
  const location = useLocation();
  return (
    <div className="header">
      <h3>Task Tracker</h3>
      {location.pathname === "/" && (
        <Button
          text={!showAddTask ? "ADD" : "CLOSE"}
          color={!showAddTask ? "green" : "red"}
          onshow={onclick}
        />
      )}
    </div>
  );
};

export default Header;
