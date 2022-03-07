
import { RiSendPlane2Fill } from 'react-icons/ri'
import { BsFillChatLeftFill } from 'react-icons/bs'
import React, {useState} from 'react'
import './search.css'
import searchData from './searchData'
import submenuData from '../sub-menu/submenu-data'
export default function Search() {
   const [info, setInfo] = useState(searchData.items)
   const [subInfo, setSubInfo] = useState(submenuData.menus) 
   const [inputshow, setInputShow] = useState(false)
   const [inputshow2, setInputShow2] = useState(false)
   const [inputshow3, setInputShow3] = useState(false)
  function handelinput(){
      setInputShow(prev=>!prev)
  }
  function handelinput2(){
      setInputShow2(prev=>!prev)
  }
  function handelinput3(){
      setInputShow3(prev=>!prev)
  }
  return (
   
    <div className="search-container">
        <div className="search-child">
            <div>
                 <input type="search" placeholder='search' className='home-search' />
            </div>
            <div className="search-btn">
                <input type="checkbox" />
                <button>Atribute</button>
                <button>Arquivar</button>
                <button>Agendar</button>
            </div>
      </div>
        <div className="search-card" onMouseEnter={handelinput} onMouseLeave={handelinput} >
            <input type='checkbox' className={ inputshow ? 'serach-checkbox': "hide"}/>
                <div className="owner">
                    <p>{info[0].subMenuItems[0].owner}</p>
                </div>
            <div className="subcard-container">
                <div className="card-title">
                    <h4>{info[0].subMenuItems[0].name}</h4>
                    <p>hoje: 23:00</p>
                </div>
                <div className="card-title">
                    <BsFillChatLeftFill className="card-title-logo" />
                    <p>{info[0].subMenuItems[0].subject}</p>
                </div>
                <div className="card-title">
                    <div className='card-subtitle'>
                    <RiSendPlane2Fill />
                    <p>{subInfo[0].name}</p>
                    </div>
                    <div className='card-footer'>
                        <p>{info[0].subMenuItems[0].users[0]}</p>
                        <p>{info[0].subMenuItems[0].users[1]}</p>
                        <p>{info[0].subMenuItems[0].users[2]}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="search-card" onMouseEnter={handelinput2} onMouseLeave={handelinput2}>
             <input type='checkbox'className={ inputshow2 ? 'serach-checkbox': "hide"}/>
                <div className="owner">
                    <p>{info[0].subMenuItems[1].owner}</p>
                </div>
            <div className="subcard-container">
                <div className="card-title">
                    <h4>{info[0].subMenuItems[1].name}</h4>
                    <p>hoje: 23:00</p>
                </div>
                <div className="card-title">
                    <BsFillChatLeftFill className="card-title-logo" />
                    <p>{info[0].subMenuItems[1].subject}</p>
                </div>
                <div className="card-title">
                    <div className='card-subtitle'>
                    <RiSendPlane2Fill />
                    <p>{subInfo[0].name}</p>
                    </div>
                    <div className='card-footer'>
                        <p className="card-footer-design">{info[0].subMenuItems[1].users[0]}</p>
                     
                    </div>
                </div>
            </div>
        </div>
        <div className="search-card" onMouseEnter={handelinput3} onMouseLeave={handelinput3}>
             <input type='checkbox' className={ inputshow3 ? 'serach-checkbox': "hide"}/>
                <div className="owner">
                    <p>{info[0].subMenuItems[2].owner}</p>
                </div>
            <div className="subcard-container">
                <div className="card-title">
                    <h4>{info[0].subMenuItems[2].name}</h4>
                    <p>hoje: 23:00</p>
                </div>
                <div className="card-title">
                    <BsFillChatLeftFill className="card-title-logo" />
                    <p>{info[0].subMenuItems[2].subject}</p>
                </div>
                <div className="card-title">
                    <div className='card-subtitle'>
                    <RiSendPlane2Fill />
                    <p>{subInfo[0].name}</p>
                    </div>
                    <div className='card-footer4'>
                        <p className="card-footer-design">{info[0].subMenuItems[2].users[0]}</p>
                        <p className="card-footer-design">{info[0].subMenuItems[2].users[1]}</p>
                        <p className="card-footer-design">{info[0].subMenuItems[2].users[2]}</p>
                        <p className="card-footer-design">{info[0].subMenuItems[2].users[3]}</p>
                     
                    </div>
                </div>
            </div>
        </div>

    </div>
 
  )
}
