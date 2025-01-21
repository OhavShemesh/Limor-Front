import React from 'react'
import HeaderManager from './Header/HeaderManager'
import MainManager from './Main/MainManager'
import FooterManager from './Footer/FooterManager'

export default function Layout({children}) {
  return (
    <div>
      <HeaderManager />
      <MainManager>
        {children}
      </MainManager>
      <FooterManager />
    </div>
  )
}
