import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './LoginForm.css';

const LoginForm = ({setLoggedin}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({email: "", password: ""});
  const [showPassword, setPassword] = useState(false);
  
  function changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value  
    }))
  }

  function submithandler(event) {
    event.preventDefault();
    setLoggedin(true);
    toast.success("Login success")  
    navigate("/dashboard")
  }

  return (
    <div className="login-form-container">
      <form onSubmit={submithandler} className="login-form">
        <label className="form-label">
          <p className="label-text">
            Email address<sub>*</sub>
          </p> 
          <input 
            required
            type='email' 
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={changehandler}
            className="form-input"
          />
        </label>

        <label className="form-label">
          <p className="label-text">
            Password<sub>*</sub>
          </p> 
          <div className="input-wrapper">
            <input 
              required
              type={showPassword ? "text" : "password"} 
              placeholder='Enter a password'
              name='password'
              value={formData.password}
              onChange={changehandler}
              className="form-input password-input"
            />
            <span 
              onClick={() => setPassword((prev) => !prev)} 
              className="eye-icon"
            >
              {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
            </span>
          </div>
          <Link to='#' className="forgot-password-link">
            <p className="forgot-password-text">Forgot password?</p>
          </Link>
        </label>

        <button type="submit" className="submit-button">
          Sign in
        </button>
      </form>
    </div>
  )
}

export default LoginForm;