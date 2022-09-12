import React from 'react';
import Login from './Login'

import {useState} from "react";

export default function () {
    const [user, setUser] = useState(undefined)

    function loginFail() {

    }

    function loginSuccess() {

    }

    function logOut() {

    }


    return (
        <div className={'header'}>
            <div className={'left-header'}>
                <div className={'icon'} style={{height: 80, width: 80}}>
                    <img height={'100%'} width={'100%'} src={'./public/img/home.png'} alt={'img'}/>
                </div>
                <h2>Funny Video</h2>
            </div>
            <div className={'login'}>
                <Login/>
            </div>
        </div>
    )
}
