import React, {useState} from "react";
import share from '../public/css/share.css';
import Header from "./Header";

export default function (){
    const [link, setLink] = useState('');
    function shareLink(){
        console.log(link)
    }
    return (
        <div>
            <Header/>
            <div className={'share-container'}>
                <div className={'input-container'}>
                    <div className={'input'}>
                        <input className={'share-input'} type={"text"} placeholder={'enter url'} onChange={(e)=>setLink(e.target.value)}/>
                    </div>
                    <button className={'button share-button'} onClick={shareLink}>share</button>
                </div>
            </div>
        </div>
    )
}
