import React from "react";

const Message = ({ type }) => {
  const messages = {
    saved: "Recipe has been saved!",
    updated: "Recipe has been updated!",
    deleted: "Recipe has been deleted."
  };
  return (
    <div className={`App-message ${type}`}>
      <p className="container">
        <strong>{messages[type]}</strong>
      </p>
    </div>
  );
};

export default Message;
