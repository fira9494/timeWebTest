import React, { useState,  useEffect } from 'react';
import {useDispatch} from "react-redux";

export function EditUser({currentUser}) {

    const [input, setInput] = useState('')
    const [select, setSelect] = useState('')


    useEffect(() => {
        setInput(currentUser.server_name);
        setSelect(currentUser.server_type)
    },[currentUser])

    const dispatch = useDispatch()
    const submitHandler = function (e){
        e.preventDefault()
        const {
            server_name: { value : server_name},
            server_type: { value : server_type}
        } = e.target

        dispatch({type: 'EDIT_USER', payload: {
                customer_id :currentUser.customer_id,
                server_name,
                server_type
        } })
        console.log(currentUser.server_name)
    }
    return (
        <div>
            {currentUser.customer_id ? <form onSubmit={submitHandler}>
                <div>UserID : {currentUser.customer_id}</div>
                <input
                    name='server_name'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <select
                    name="server_type"
                    id="asd"
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    <option value="vds">vds</option>
                    <option value="dedicated">dedicated</option>
                    <option value="hosting">hosting</option>
                </select>
                <button type='submit'>save</button>
            </form> : null}
        </div>
    );
}

