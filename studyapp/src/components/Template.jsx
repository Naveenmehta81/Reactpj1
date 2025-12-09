import React from 'react'
import Signup from '../pages/Signup'
import Iogin from '../pages/Iogin'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './Template.css'

const Template = ({title, desc1, desc2, image, formType, setLoggedin}) => {
  return (
    <div className="template-container">
      <div className="template-content">
        <div className="template-left">
          <h1 className="template-title">{title}</h1>
          <p className="template-description">
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>
          
          {/* in that we render form  */}
          <div className="form-container">
            {formType === "signup" ? (
              <SignupForm setLoggedin={setLoggedin}/>
            ) : (
              <LoginForm setLoggedin={setLoggedin}/>
            )}
          </div>
          
          <div className="divider-container">
            <div className="divider-line"></div>
            <p className="divider-text">Or</p>
            <div className="divider-line"></div>
          </div>
          
          <button className="google-button">
            <p>Sign Up With Google</p>
          </button>
        </div>
        
        <div className="template-right">
          <img src={image} alt="Template" className="template-image" />
        </div>
      </div>
    </div>
  )
}

export default Template;