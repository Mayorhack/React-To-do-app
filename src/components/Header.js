import React from "react";
import Button from "./Button";

const Header = ({ onclick, showAddTask }) => {
  return (
    <div className="header">
      <h3>Task Tracker</h3>
      <Button
        text={!showAddTask ? "ADD" : "CLOSE"}
        color={!showAddTask ? "green" : "red"}
        onshow={onclick}
      />
    </div>
  );
};

export default Header;
