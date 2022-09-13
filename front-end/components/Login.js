import React, {useState} from 'react';
import {signup as apiSignup, login as apiLogin} from "../api/user";
import login from '../public/css/login.css'

export default function ({loginSuccessCallBack, loginFailCallBack}) {
    const [inputName, setInputName] = useState('');
    const [passWord, setPassWord] = useState('');

    function validate() {
        if (!inputName) return 'Please input username';
        if (!passWord) return 'Please input password';
        if (inputName.length < 4 || passWord.length < 4) return 'Username and password must have more 4 character ';
    }

    async function signup() {
        try {
            const validateMessage = validate();
            if (validateMessage) return alert(validateMessage)
            const res = await apiSignup(inputName, passWord);
            alert('Signup success please login to use!!')
        } catch (ex) {
            alert(ex)
        }
    }

    async function login() {
        try {
            const validateMessage = validate();
            if (validateMessage) return alert(validateMessage)
            const res = await apiLogin(inputName, passWord);
            loginSuccessCallBack(res);
        } catch (ex) {
            alert(ex)
        }
    }

    return (
        <div className={'login-container'}>
            <div className={'input'}>
                <input type={"text"} placeholder={"username"} onChange={(e) => {setInputName(e.target.value)}}/>
            </div>
            <div className={'input'}>
                <input type={"password"} placeholder={"password"} onChange={(e) => {setPassWord(e.target.value)}}/>
            </div>
            <button style={{background:'#a84ff1'}} onClick={login}>Login</button>
            <button style={{background:'#e82b4c'}} onClick={signup}>Signup</button>
        </div>
    )
}
