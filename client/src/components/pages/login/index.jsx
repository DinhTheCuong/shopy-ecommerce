import React, { useState, useContext } from 'react';
import { AppContext } from '../../../App';
// import { BsFacebook } from 'react-icons/bs';
// import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import authorization from '../../../login';
import './style.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const appValue = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid Email';
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = 'Passwords must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const options = {
    validateForm,
    appValue,
    navigate,
  };

  return (
    <div className='login-page'>
      <p className='page-title'>Login</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className='error-message'>{errors.email}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className='error-message'>{errors.password}</div>
          )}
        </div>
        <button
          type='submit'
          onClick={() => authorization(email, password, options)}
          className='submit-button'
        >
          Login
        </button>
        <div className='separator'>
          <p className='register-link'>
            Don't have an Account? Register <Link to='/register'>here</Link>
          </p>
          {/* <span className='separator-text'>or</span> */}
        </div>
        {/* <div className='social-login'>
          <button type='button' className='social-button facebook-button'>
            <BsFacebook className='social-icon' /> Facebook
          </button>
          <button type='button' className='social-button google-button'>
            <AiFillGoogleCircle className='social-icon' /> Google
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default LoginPage;
