import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function FooterManager() {
  const navigate = useNavigate()
  return (
    <div>
      <Footer navigate={navigate} />
    </div>
  )
}
