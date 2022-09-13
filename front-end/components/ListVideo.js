import React, {useEffect, useState} from "react";
import Video from "./Video";
import listvideo from "../public/css/listvideo.css"
import {listUp} from "../api/video";

export default function () {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    useEffect(() => {
        listUp(page).then(({videos, size}) => {
            videos = videos.map(video => {
                const {id, title, description, userShare} = video
                return <li className={'video'} key={id} style={{paddingBottom: '10px'}}>
                    {<Video id={id} title={title} description={description} shareBy={userShare}/>}
                </li>
            })
            setMaxPage(size / 10);
            setItems(videos)
        })
    }, [page])
    return (
        <div className={'list-container'}>
            <ul className={'list-video'}>
                {items}
            </ul>
            <div className={'pagination'}>
                <button className={'button-page'} disabled={page === 1} onClick={() => setPage(page - 1)}>back</button>
                <button className={'button-page'} disabled={page >= maxPage} onClick={() => setPage(page + 1)}>next</button>
            </div>
        </div>
    )
}
