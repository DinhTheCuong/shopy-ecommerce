import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { BsFacebook } from 'react-icons/bs';
// import { AiFillGoogleCircle } from 'react-icons/ai';
import createUser from '../../../register';
import './style.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
      newErrors.password =
        'Passwords must be at least 6 characters';
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword =
        'Confirmation password does not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const registerUser = () => {
    const user = {
      email: email,
      loggedIn: true,
    };
    localStorage.setItem('user', JSON.stringify(user));
  };

  const options = {
    validateForm,
    registerUser,
    navigate,
  };

  return (
    <div className='register-page'>
      <p className='page-title'>Create Account</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className='error-message'>
              {errors.email}
            </div>
          )}
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
            <div className='error-message'>
              {errors.password}
            </div>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='confirm-password'>
            Confirm password:
          </label>
          <input
            type='password'
            s
            id='confirm-password'
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />
          {errors.confirmPassword && (
            <div className='error-message'>
              {errors.confirmPassword}
            </div>
          )}
        </div>
        <button
          className='submit-button'
          onClick={() =>
            createUser(
              email,
              password,
              confirmPassword,
              options
            )
          }
          type='submit'
        >
          Register
        </button>

        <div className='separator'>
          <p className='register-link'>
            Already have an Account? Login{' '}
            <Link to='/login'>here</Link>
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

export default Register;
