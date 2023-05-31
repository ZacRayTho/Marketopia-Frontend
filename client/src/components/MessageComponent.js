import React from "react";

function MessageComponent({ message, state }) {
  // console.log(state.currentUser.user_id);
  // console.log(message);
  return (
    <div className={`flex w-fit items-end ${message.sender == state.currentUser.user_id ? "ml-auto" : ""}`}>
      <div className={`text-[0.65rem] text-gray-300 ${message.sender == state.currentUser.user_id ? "" : "order-2"}`}>{message.timestamp}</div>
      <div
        className={`w-fit border rounded-lg px-2 py-1 ${
          message.sender == state.currentUser.user_id ? "bg-mtpurple" : "bg-mtmedium"
        }`}
      >
        <div className="text-white">{message.text}</div>
      </div>
    </div>
  );
}

export default MessageComponent;
