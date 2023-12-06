import React, { useState } from 'react';
import { FiEye , FiEyeOff } from "react-icons/fi";
import './loginpage.css';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="container mt-5 form" style={{width:"30%", }}>
    <form action="">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fs-5 fw-bold text-white"> Email </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text fw-bold text-white">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
            <label for="exampleInputPassword1" class="form-label fs-5 fw-bold text-white">Password</label>
            
            <div className="d-flex justify-content-between form-control">
                <input className='input-password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <div type="button" onClick={handleTogglePassword}>
                {showPassword ? <FiEye /> : <FiEyeOff />} 
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
      

   
    </div>
  );
};

export default LoginPage;
