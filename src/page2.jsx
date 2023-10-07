import React from 'react'
import { useNavigate } from 'react-router'

export const Page2 = () => {
    let navigate = useNavigate();

    return (
        <button onClick={()=> navigate('/')}>Go To Page 1</button>
    )
}
