import React, {useState, useEffect} from 'react';
import {UserList} from "../../components/common/UserList";
import {EditUser} from "../../components/common/EditUser";
import {useDispatch} from "react-redux";
import {users} from "../../mockup";

function MainPage(props) {
    const [currentUser, setCurrentUser] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'INIT_USERS', payload: users})
    }, [])
    console.log(currentUser)
    return (
        <div style={{display: 'flex', justifyContent: "space-around"}}>
            <div>
                <UserList setCurrentUser={setCurrentUser}/>
            </div>
            <EditUser currentUser={currentUser}/>
        </div>
    );
}

export default MainPage;