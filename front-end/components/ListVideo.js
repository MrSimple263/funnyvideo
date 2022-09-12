import React, {useEffect, useState} from "react";
import Video from "./Video";
import listvideo from "../public/css/listvideo.css"
import {listUp} from "../api/video";

export default function () {
    const [items, setItems] = useState([]);
    let videos = [];
    useEffect(() => {
        listUp().then(videos => {
            videos = videos.map(video => {
                const {id, title, description, userShare} = video
                return <li className={'video'} key={id} style={{paddingBottom: '10px'}}>
                    {<Video id={id} title={title} description={description} shareBy={userShare}/>}
                </li>
            })
            setItems(videos)
        })

    },[])
    return (
        <div className={'list-container'}>
            <ul className={'list-video'}>
                {items}
            </ul>
            <div className={'pagination'}>
                <button>back</button>
                <button>next</button>
            </div>
        </div>
    )
}
