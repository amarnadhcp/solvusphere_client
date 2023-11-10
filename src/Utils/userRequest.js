import axios from "axios"
const userurl = import.meta.env.VITE_userBaseUrl
const userRequest = axios.create({
    baseURL:userurl
})

userRequest.interceptors.request.use((req) => {
    if (localStorage.getItem("currentUser")) {
        console.log(userurl);
        req.headers.Authorization = localStorage.getItem("currentUser");
    }
    return req; 
});

export default userRequest 