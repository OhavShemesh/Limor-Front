import React from 'react'
import Main from './Main'
import { Box } from '@mui/material'

export default function MainManager({ children }) {
  return (
      <Main>
        {children}
      </Main>
  )
}
