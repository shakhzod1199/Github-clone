import axios from "axios"

export const api = {
    getUser:()=> {
        return axios.get(`https://api.github.com/users/shahzod1120`)
    },
    getRepositories:()=> {
        return axios.get(`https://api.github.com/users/shahzod1120/repos`)
    },
    getFollowers:()=> {
        return axios.get(`https://api.github.com/users/shahzod1120/followers`)
    },
    getFollowing:()=> {
        return axios.get(`https://api.github.com/users/shahzod1120/following`)
    },
    getSearchUsers:(user_name)=> {
        return axios.get(`https://api.github.com/search/users?q=${user_name}`)
    }
}