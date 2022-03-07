import './submenu.css'
import {AiOutlineCaretLeft, AiOutlineRight, AiOutlineDown, AiOutlineCaretDown } from 'react-icons/ai'

import submenuData from './submenu-data'
import React, {useState} from 'react'

export default function Submenu() {
     const [info, setInfo] = useState(submenuData.menus)
     const [showall, setShowAll] = useState(false)
     const [show, setShow] = useState(false)
     const [show1, setShow1] = useState(false)
     const [show2, setShow2] = useState(false)
   function handelShowAll(){
         setShowAll(prev=>!prev)
     }
     function handelShow(){
         setShow(prev=>!prev)
     }
     function handelShow1(){
         setShow1(prev=>!prev)
     }
     function handelShow2(){
         setShow2(prev=>!prev)
     }
  return (
 
        <div className="submenu-container">
            <div className='submenu-header'>
                    <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="seconddog"/>
                    <div className='login-sign'></div>
                    <div className='submenu-header1' onClick={handelShowAll}>
                    <p>NOVO</p>
                   {showall ? <AiOutlineCaretDown /> : <AiOutlineCaretLeft />   }
                    </div>
            </div>
            <div className={showall ? "" : "hide"}>
            <div className="submenu-card">
            <p>favorits</p>
            <span>30</span>
            </div>
                 <div className='submenu-title' onClick={handelShow}>
                     {show ? <AiOutlineDown className='submenu-logo' /> : <AiOutlineRight className='submenu-logo'/>  }
                     <p className="first-title">{info[0].name}</p>
                     <span>15</span>
                 </div>
                 <div className={show ? 'submenu-child' : 'hide'}>
                    <div className='submenu-littleChild'>
                        <p>{info[0].subMenus[0].name}</p>
                        <span>15</span>
                    </div>
                    <div className='submenu-littleChild'>
                        <p>{info[0].subMenus[1].name}</p>
                        <span>15</span>
                    </div>
                </div>
                <div className='submenu-title'onClick={handelShow1}>
                    {show1 ? <AiOutlineDown className='submenu-logo' /> : <AiOutlineRight className='submenu-logo'/>  }
                     <p className="first-title">{info[1].name}</p>
                     <span>15</span>
                </div>
                <div className={show1 ? 'submenu-child' : 'hide'}>
                    <div className='submenu-littleChild'>
                    <p>{info[1].subMenus[0].name}</p>  
                    <span>15</span>
                </div>
                </div>
                <div className='submenu-title' onClick={handelShow2}>
                    {show2 ? <AiOutlineDown className='submenu-logo' /> : <AiOutlineRight className='submenu-logo'/>  }
                     <p className="first-title">{info[2].name}</p>
                     <span>15</span>

                </div>
                <div className={show2 ? 'submenu-child' : 'hide'}>
                    <div className='submenu-littleChild'>
                    <p>{info[2].subMenus[0].name}</p> 
                    <span>15</span> 
                    </div>
                    <div className='submenu-littleChild'>
                    <p>{info[2].subMenus[1].name}</p>
                    <span>15</span> 
                    </div>  
                    <div className='submenu-littleChild'>
                    <p>{info[2].subMenus[2].name}</p>  
                    <span>15</span> 
                    </div>
                </div>
                </div>
            
        </div>

  )
}
