import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Action/action';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    // useSelector is used to access state from the store
    const { loading, error } = useSelector((state) => state);

    const h = useSelector((state) => state.user);

    console.log(h);
    
    // handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(loginUser(email, password,toString()));
    };
    
    return (
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" disabled={loading}>Login</button>
      </form>
    );
  };

  export default Login