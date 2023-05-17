import React from 'react'
import './Main.css'
import { Header } from './Header' 
import { Post } from './Post'
import { Groups } from './Groups'
import { Footer } from './Footer'


export const Main = () => {
  return (
    <div className='Main'>
        < Header />
        < Post /> 
        < Groups />
        < Footer />
    </div>
  )
}
