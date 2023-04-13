import axios from "axios"

export const api = {
    getUser:()=> {
        return axios.get(`https://api.github.com/users/shakhzod1199`)
    },
    getRepositories:()=> {
        return axios.get(`https://api.github.com/users/shakhzod1199/repos`)
    },
    getFollowers:()=> {
        return axios.get(`https://api.github.com/users/shakhzod1199/followers`)
    },
    getFollowing:()=> {
        return axios.get(`https://api.github.com/users/shakhzod1199/following`)
    },
    getSearchUsers:(user_name)=> {
        return axios.get(`https://api.github.com/search/users?q=${user_name}`)
    }
}