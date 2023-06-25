import axios from "axios";
axios.defaults.baseURL='http://localhost:4000/'
axios.interceptors.request.use(function(req){
    const user=sessionStorage.getItem('user')
    if(user){
        debugger
        const {token}=JSON.parse(sessionStorage.getItem('user'))
        req.headers.authorization=  `Bearer ${token}`
        return req
    }
    return req
});

