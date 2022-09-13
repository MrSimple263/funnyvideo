import React, {useState, useTransition} from "react";
import share from '../public/css/share.css';
import Header from "./Header";
import {uploadVideo} from "../api/video";

export default function () {
    const [link, setLink] = useState('');
    const [message, setMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    function isUrl(url) {
        try {
            new URL(url);
            return true
        } catch (e) {
            return false
        }
    }

    async function shareLink() {
        setMessage('');
        try {
            setShowLoader(true)
            if (!isUrl(link)) {
                setMessage('This is not URL please check again');
            } else {
                await uploadVideo(link);
                setMessage('Upload video success!Click to icon homepage to see video Uploaded!');
            }
        } catch (ex) {
            alert(ex)
        } finally {
            setShowLoader(false)
        }

    }

    return (
        <div>
            <Header/>
            <div className={'share-container'}>
                <div className={'input-container'}>
                    <div className={'input'}>
                        <input className={'share-input'} type={"text"} placeholder={'Enter Youtube video url'} onChange={(e) => {
                            setMessage('');
                            setLink(e.target.value);
                        }}/>
                        <span style={{color: "red"}}>{message}</span>
                    </div>
                    {showLoader &&
                        <div className={'loader'}><img height={'100%'} width={'100%'} src={'./public/img/loader.png'}
                                                       alt={'img'}/></div>}
                    {!showLoader && <button className={'button share-button'} onClick={shareLink}>share</button>}
                </div>
            </div>
        </div>
    )
}
