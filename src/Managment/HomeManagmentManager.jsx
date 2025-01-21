import React from 'react'
import HomeManagment from './HomeManagment'
import { useNavigate } from 'react-router-dom'

export default function HomeManagmentManager() {
    const navigate = useNavigate()
    return (
        <>
            <HomeManagment navigate={navigate} />
        </>
    )
}
