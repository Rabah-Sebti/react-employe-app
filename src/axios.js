import axios from "axios";
axios.defaults.baseURL='https://react-employee-management-app.onrender.com'
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

