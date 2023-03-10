import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/Action/action';
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 const error = useSelector((state) => state.user);
 const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password.toString()));
    alert('cuenta creada')
    // navigate('/')
  };

  return (
    <div>
      {/* {error && <div>{error}</div>} */}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;