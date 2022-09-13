import axios from "axios";
import {BACKEND_URL} from "../constant";

export async function uploadVideo(url, token = sessionStorage.getItem('token')) {
    try {
        const res = await axios.post(BACKEND_URL + '/video/upload', {url}, {headers: {Authorization: 'Bearer ' + token}});
        return {id: res.data.id}
    } catch (ex) {
        if (ex.response.status === 400) throw ex.response.data.message;
        throw ex.toString();
    }
}

export async function listUp(page = 1, token = sessionStorage.getItem('token')) {
    try {
        const res = await axios.get(BACKEND_URL + `/video/list?page=${page}`, {headers: {Authorization: 'Bearer ' + token}});
        const videos = res.data.videos.map(v => {
            const {id, title, description, userShare} = v
            return {id, title, description, userShare}
        })
        const size = res.data.size;
        return {videos, size}
    } catch (ex) {
        throw ex;
    }
}
