import React, {useEffect} from 'react';
import Login from './Login'
import {useState} from "react"
import {useNavigate, useLocation} from "react-router-dom";
import header from '../public/css/header.css'
import {checkToken} from "../api/user";

export default function () {
    const [user, setUser] = useState(undefined)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (token) {
            checkToken(token).then(({userName}) => {
                setUser(userName)
            })
        } else {
            if (location.pathname !== '/') {
                setUser(undefined)
                navigate('/')
            }
        }
    }, []);

    function loginSuccess({userName, token}) {
        sessionStorage.setItem('token', token);
        setUser(userName)
    }

    function logOut() {
        sessionStorage.clear();
        navigate('/')
        setUser(undefined)
    }

    function navigateShare() {
        if (location.pathname === '/share') return;
        navigate('share')
    }

    return (
        <div className={'header'}>
            <div className={'left-header'} onClick={() => navigate('/')}>
                <div className={'icon'} style={{height: 50, width: 50}}>
                    <img height={'100%'} width={'100%'} src={'./public/img/home.png'} alt={'img'}/>
                </div>
                <h2>Funny Video</h2>
            </div>
            <div className={'right-header'}>
                <div className={'login'}>
                    {!user ? <Login loginSuccessCallBack={loginSuccess}/> :
                        <div className={'container-logged'}>
                            <div style={{alignSelf: "center"}}>Welcome user <span
                                style={{fontWeight: "bold", fontStyle: "italic", fontSize: '1.2em',marginRight:'10px'}}>{user}</span></div>
                            <button style={{background: '#a84ff1'}} onClick={navigateShare}>Share Video</button>
                            <button style={{background: '#e82b4c'}} onClick={logOut}>Logout</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
