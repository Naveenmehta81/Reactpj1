import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Iogin from './pages/Iogin.jsx'
import Signup from './pages/Signup.jsx'
import Dashborad from './pages/Dashborad'

function App() {
   
const [isLoggeding, setLoggedin] = useState(false);
  return (
    <>
     <div>
      <Navbar
      isLoggeding={isLoggeding}   // ✅ boolean
      setLoggedin={setLoggedin}  // ✅ function
    />
      <div>
           <Routes>
           <Route path='/' element = {<Home/>}/>
             <Route path='/Iogin' element = {<Iogin setLoggedin ={setLoggedin}/>}/>
               <Route path='/signup' element = {<Signup setLoggedin = {setLoggedin}/>}/>
               <Route path='/Dashborad' element = {<Dashborad/>}/>
      </Routes> 
   
      </div>
     



     </div>
    </>
  )
}

export default App;
