import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './SignupForm.css';

const SignupForm = ({setLoggedin}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '', 
    email: '', 
    password: '', 
    confirmpassword: '',
    
  })
  const [showPassword, setPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  function changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value 
    }))
  }

  function submithandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoggedin(true);
    toast.success("Account created successfully");
    navigate("/dashboard");
  }

  return (
    <div className="signup-form-container">
      <form onSubmit={submithandler} className="signup-form">
        {/* Account Type Selection */}
        <div className="account-type-container">
          <button
            type="button"
            className={`account-type-btn ${formData.accountType === 'student' ? 'active' : ''}`}
            onClick={() => setFormData(prev => ({...prev, accountType: 'student'}))}
          >
            Student
          </button>
          <button
            type="button"
            className={`account-type-btn ${formData.accountType === 'instructor' ? 'active' : ''}`}
            onClick={() => setFormData(prev => ({...prev, accountType: 'instructor'}))}
          >
            Instructor
          </button>
        </div>

        {/* Name Fields */}
        <div className="form-row">
          <label className="form-label">
            <p className="label-text">first name<sub>*</sub></p>
            <input
              required
              type='text'
              placeholder='First name'
              name='firstname'
              value={formData.firstname}
              onChange={changehandler}
              className="form-input"
            />
          </label>

          <label className="form-label">
            <p className="label-text">last name<sub>*</sub></p>
            <input
              required
              type='text'
              placeholder='Last name'
              name='lastname'
              value={formData.lastname}
              onChange={changehandler}
              className="form-input"
            />
          </label>
        </div>

        {/* Email Field */}
        <label className="form-label">
          <p className="label-text">email address<sub>*</sub></p>
          <input
            required
            type='email'
            placeholder='Enter email'
            name='email'
            value={formData.email}
            onChange={changehandler}
            className="form-input"
          />
        </label>

        {/* Password Fields */}
        <div className="password-row">
          <label className="form-label">
            <p className="label-text">create password<sub>*</sub></p>
            <div className="input-wrapper">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={changehandler}
                className="form-input password-input"
              />
              <span 
                onClick={() => setPassword(prev => !prev)} 
                className="eye-icon"
              >
                {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
              </span>
            </div>
          </label>

          <label className="form-label">
            <p className="label-text">confirm password<sub>*</sub></p>
            <div className="input-wrapper">
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                placeholder='Confirm password'
                name='confirmpassword'
                value={formData.confirmpassword}
                onChange={changehandler}
                className="form-input password-input"
              />
              <span 
                onClick={() => setConfirmPassword(prev => !prev)} 
                className="eye-icon"
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
              </span>
            </div>
          </label>
        </div>

        <button type="submit" className="submit-button">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm;