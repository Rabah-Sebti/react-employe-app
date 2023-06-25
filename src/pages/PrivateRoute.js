import React, { useEffect } from 'react'
import { Route, Navigate, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import Planning from './Planning'
const PrivateRoute = (props) => {
  debugger
  const { user } = useGlobalContext()
  const {Component}=props;
  const navigate=useNavigate()

  return (
   
   <>
    {
         user ? <Planning /> : <Navigate to='/login'></Navigate>
      }
   </>
  )
}
export default PrivateRoute