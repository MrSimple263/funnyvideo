import React from 'react';
import Login from './Login'
import {useState} from "react"
import {useNavigate, useLocation} from "react-router-dom";
import header from '../public/css/header.css'

export default function () {
    const [user, setUser] = useState(undefined)
    const navigate = useNavigate();
    const location = useLocation();

    function loginFail() {

    }

    function loginSuccess() {

    }

    function logOut() {

    }

    function navigateShare(){
        if (location.pathname === '/share') return;
        navigate('share')
    }

    return (
        <div className={'header'}>
            <div className={'left-header'}>
                <div className={'icon'} style={{height: 50, width: 50}}>
                    <img height={'100%'} width={'100%'} src={'./public/img/home.png'} alt={'img'}/>
                </div>
                <h2>Funny Video</h2>
            </div>
            <div className={'right-header'}>
                <div className={'login'}>
                    {!user ? <Login />:
                        <div>
                            <button onClick={navigateShare}>Share</button>
                            <button onClick={logOut}>Logout</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
