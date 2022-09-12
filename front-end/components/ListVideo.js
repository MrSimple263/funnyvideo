import React from "react";
import Video from "./Video";
import listvideo from "../public/css/listvideo.css"
export default function () {
    const listItem = [];
    for (let i = 0; i < 10; i++) {
        listItem.push(
            <li className={'video'} key={i.toString()} style={{paddingBottom: '10px'}}>
                {<Video/>}
            </li>
        )
    }
    return (
        <div className={'list-container'}>
            <ul className={'list-video'}>
                {listItem}
            </ul>
            <div className={'pagination'}>
                <button>back</button>
                <button>next</button>
            </div>
        </div>
    )
}
