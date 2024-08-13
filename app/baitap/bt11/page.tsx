import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Main from './Main'

export default function page() {
  return (
    <div>
      <Header></Header>
      <div className='flex items-center justify-between'>
        <div><Menu></Menu></div>
        <div className='p-5 min-w-full min-h-screen'>
            <Main></Main>
            <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
