import React, { useState, useEffect } from "react";
import { UserList } from "../../components/common/UserList";
import { useDispatch } from "react-redux";
import { users } from "../../mockup";
import { UserEditor } from "../../components/common/UserEditor";
import { INIT_USERS } from "../../utils/types";
import "./MainPage.css";

function MainPage(props) {
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: INIT_USERS, payload: users });
  }, []);

  return (
    <div className="main-container">
      <div className="user-list_wrapper">
        <UserList setCurrentUser={setCurrentUser} />
      </div>
      <div className="user-editor_wrapper">
        <UserEditor currentUser={currentUser} />
      </div>
    </div>
  );
}

export default MainPage;
