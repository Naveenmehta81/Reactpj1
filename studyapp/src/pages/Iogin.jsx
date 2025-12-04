import React from 'react'
import Template  from '../components/Template';




const Iogin = ({setLoggedin}) => {
  return (
   <Template
   title = "welcome back"
   desc1 = 'work hard naveen'
   desc2 = 'you need to became a mern stack'
   image = '/loginImage.jpg'
   formType = "login"
   setLoggedin = {setLoggedin}
         />
  )
}



export default Iogin;