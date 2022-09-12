import {BACKEND_URL} from "../constant";

const axios = require('axios')

export async function signup(username, password) {
    try {
        const res = await axios.post(BACKEND_URL + '/user/signup', {username, password});
        return {userName: res.data.username}
    } catch (ex) {
        if (ex.response.status === 400) throw 'User name have already registered please use another name!';
        throw ex.toString();
    }
}

export async function login(username, password) {
    try {
        const res = await axios.post(BACKEND_URL + '/user/login', {username: username, password: password});
        return {userName: res.data.username, token: res.data.token}
    } catch (ex) {
        throw ex.response.data.message;
    }
}

export async function checkToken(token) {
    try {
        const res = await axios.get(BACKEND_URL + '/user', {headers: {Authorization: 'Bearer ' + token}});
        return {userName: res.data.username}
    } catch (ex) {
        throw ex.response.data.message;
    }
}
