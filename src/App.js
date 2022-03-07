
import './App.css';
import {useState} from 'react'
import Navbar from './components/pages/Navbar/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Ajuda from './components/pages/Ajuda';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [toggle, setToggle] = useState(true)
  const [token, setToken] = useState(true);
    function handelToggle(){
        setToggle(prev=> !prev)
    }

    if(token){
    return <Login setToken={setToken}/>
  } else{
  return (
    <div className={toggle ? "dark" : "light"}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar toggle={toggle} handelToggle={handelToggle}/>}>
          <Route index element={<Home toggle={toggle}/>} />
          <Route path="ajuda" element={<Ajuda />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )

}
}
export default  App;
