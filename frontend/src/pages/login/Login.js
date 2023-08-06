/* eslint-disable no-unused-vars */
import React, {useState} from 'react';


const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    console.log(e);
 
  };


  return (
    <section>
      <form>
        <label htmlFor="inputEmail">Email</label>
        <input 
          type="text" 
          id="inputEmail" 
          name={email}
          onKeyDown={handleLogin}
        />
        <label htmlFor="inputPass">Senha</label>
        <input 
          type="text" 
          id="inputPass" 
          name={pass}
          onKeyDown={handleLogin}
        />
        <button type='submit'>Logar</button>
      </form>
    </section>
  );
};

export default Login;