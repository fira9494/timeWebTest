import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EDIT_USER } from "../../../utils/types";
import "./UserEditor.css";

export function UserEditor({ currentUser }) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    setInput(currentUser.server_name);
    setSelect(currentUser.server_type);
  }, [currentUser]);

  const dispatch = useDispatch();
  const submitHandler = function (e) {
    e.preventDefault();
    const {
      server_name: { value: server_name },
      server_type: { value: server_type },
    } = e.target;

    dispatch({
      type: EDIT_USER,
      payload: {
        customer_id: currentUser.customer_id,
        server_name,
        server_type,
      },
    });
    console.log(currentUser.server_name);
  };
  return (
    <div>
      {currentUser.customer_id ? (
        <form onSubmit={submitHandler}>
          <div className="form-item">User Id : {currentUser.customer_id}</div>
          <div className="form-item">
            <label>Server Name</label>
            <input
              className="user-id_input"
              name="server_name"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Server Type</label>
            <select
              className="user-id_select"
              name="server_type"
              id="asd"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="vds">vds</option>
              <option value="dedicated">dedicated</option>
              <option value="hosting">hosting</option>
            </select>
          </div>
          <div className="form-item">
            <button className="user-id_btn" type="submit">
              save
            </button>
          </div>
        </form>
      ) : (
        <h1>Choose User</h1>
      )}
    </div>
  );
}
