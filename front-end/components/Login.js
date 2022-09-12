import React, {useState} from 'react';
import login from '../public/css/login.css'

export default function () {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    function signup() {
        console.log(userName, passWord)
    }

    function login() {

    }

    return (
        <div className={'login-container'}>
            <div className={'input'}>
                <input type={"text"} placeholder={"username"} onChange={(e) => {
                    setUserName(e.target.value)
                }}/>
            </div>
            <div className={'input'}>
                <input type={"password"} placeholder={"password"} onChange={(e) => {
                    setPassWord(e.target.value)
                }}/>
            </div>
            <button onClick={login}>Login</button>
            <button onClick={signup}>Signup</button>
        </div>
    )
}
