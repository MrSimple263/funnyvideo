import React from "react";
import video from '../public/css/video.css'
export default function (id, title, description, shareBy){
    shareBy='abcb@@@'
    id = 'yiW_wqpiCqk'
    return(
        <div className={'video-container'}>
            <div className={'thumbnail'} style={{width:'40%'}}>
                <img height={'100%'} width={'100%'} src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}/>
            </div>
            <div className={'info'} >
                <div className={'title'}>Title</div>
                <div className={'user-share'}>Share by: {shareBy}</div>
                <div style={{paddingTop:'5px'}}>Description:</div>
                <div className={'description'}>
                    Vua Charles III bày tỏ sự biết ơn đến Nữ hoàng Anh Elizabeth II và tuyên bố phụng sự hoàng gia bằng "tình yêu, sự kính trọng và lòng trung thành" giống như bà đã làm hơn 70 năm qua.
                    ----------
                    Đồng hành cùng VTV Digital tại:
                    Ứng dụng VTVgo
                    Android:
                    Android: </div>
            </div>
        </div>
    )
}
