import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function HeaderManager() {
  const navigate = useNavigate()
  return (
    <div>
      <Header navigate={navigate} />
    </div>
  )
}
