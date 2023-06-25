import Header from "../components/Header"
import Login from "../components/Login"
import { useGlobalContext } from "../context/context"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Swal from 'sweetalert2'
// import Swal from 'bootstrap-sweetalert'
const Planning=()=>{
    const {user}=useGlobalContext()
    debugger
const handleClick=()=>{
  // swal("Success Message Title", "Well done, you pressed a button", "success")
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
}
// $("button").click(function() {
//   swal("Success Message Title", "Well done, you pressed a button", "success")
// });
return(
<>
<div>
          {/* {user?(<Header />):(<Navigate to ="/" replace />)} */}
            <Header />
            {/* <button className="btn btn-warning" onClick={handleClick}></button> */}
            {/* <Login /> */}

 </div>      
</>
)
}
export default Planning