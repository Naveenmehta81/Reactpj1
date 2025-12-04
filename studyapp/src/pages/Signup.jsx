import React from 'react'
import Template from '../components/Template';



 const Signup = ({setLoggedin}) => {
  return (
    <Template
     title = "let sign up"
   desc1 = ' you can do it'
   desc2 = 'you need to became a mern stack start your lession '
   image =  '/ai-generated-8918386_1280.jpg'
   formType = "signup"
   setLoggedin = {setLoggedin}
    />
  )
}


export default Signup;
