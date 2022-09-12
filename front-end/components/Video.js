import React from "react";
import video from '../public/css/video.css'
export default function ({id, title, description, shareBy}){
    return(
        <div className={'video-container'}>
            <div className={'thumbnail'} style={{width:'40%'}}>
                <img height={'100%'} width={'100%'} src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}/>
            </div>
            <div className={'info'} >
                <div className={'title'}>{title}</div>
                <div className={'user-share'}>Share by: {shareBy}</div>
                <div style={{paddingTop:'5px'}}>Description:</div>
                <div className={'description'}>{description}</div>
            </div>
        </div>
    )
}
