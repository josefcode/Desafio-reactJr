import React, {useState} from 'react'
import { Outlet, Link } from "react-router-dom";
import './navbar.css'
import { AiOutlineMenu, AiFillCaretLeft } from 'react-icons/ai'
export default function Navbar({toggle, handelToggle}) {
     const [drop, setDrop] = useState(false);
   function handelClick() {
    setDrop((prevMode) => !prevMode);
  }
  return (
    <>
    <nav className='navbar'>
        <ul className='navbar-list'>
          <AiOutlineMenu className='navbar-logo'/>
          <li>
            <Link className='navbar-link' to="/ajuda">Ajuda</Link>
          </li>
         <li className="config">
           <button type="button" className="button" onClick={handelClick}>configuration</button>
      
             {drop && (
          <div class="dropdown">
          <button className="btn">Logout</button>
          </div>
          )}
         </li>
         <li>
            <select name="select">
                <option value="US">US</option>
                <option value="PR" selected>PR</option>
                <option value="valor3">SP</option>
            </select>
         </li>
         <li>
           <button className='navbar-btn' onClick={handelToggle}>{toggle ? "light" : "dark"}</button>
         </li>
        </ul>
      </nav>

      <Outlet />
    
    </>
  )
}
