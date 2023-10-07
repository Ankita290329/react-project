import React from 'react'
import { Navigate, useNavigate } from 'react-router'

export const Page1 = () => {
    let navigate = useNavigate();
  return (
    <button onClick={()=> navigate('/page2')}>Go To Page 2</button>
  )
}
