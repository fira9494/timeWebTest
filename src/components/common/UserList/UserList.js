import React from 'react';
import {UserCard} from "../UserCard";
import {useSelector} from "react-redux";
export function UserList({setCurrentUser}) {

    // const users = JSON.parse(localStorage.getItem('users'))

    const users = useSelector(state => state.user)
    console.log(users)
    return (
        <>
            {users && users?.map(user => <UserCard setCurrentUser={setCurrentUser} key={performance.now()} {...user}/>)}
        </>
    );
}

