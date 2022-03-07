import React from 'react'
import './home.css'
import Submenu from '../../sub-menu/Submenu'
import { AiTwotoneBulb } from 'react-icons/ai'
import Search from '../../Search/Search'
export default function Home() {
  return (
      <div className='main-container'>
      
      <Submenu />
    
      <Search />
  
      
    </div>
  )
}
