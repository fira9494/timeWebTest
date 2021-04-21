import React from "react";
import "./UserCard.css";

export function UserCard({
  customer_id,
  server_name,
  server_type,
  setCurrentUser,
}) {
  return (
    <div
      className="user-card"
      onClick={() => {
        setCurrentUser({ customer_id, server_name, server_type });
      }}
    >
      <div> User Id: {customer_id}</div>
      <div> Server Name: {server_name}</div>
      <div> Server Type: {server_type}</div>
    </div>
  );
}
