import { useState } from 'react';
import { Link } from "react-router-dom";

import './login.css';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && password === "123456") {
      setMessage("Acessado com sucesso!");
    } else {
      setMessage("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Login</span>
            

            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} //captura o valor da variável
              />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>
            <div className="wrap-input">

              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Password'></span>
            </div>
            <div className='container-login-form-btn'>
              <button type="submit" className='login-form-btn' onClick={handleLogin}>Acessar</button>
              <p className='mensagem-login'>{message}</p>
            </div>


            <div className='text-center'>
              <span className='txt1-login'>Não possui login? </span>
            
              <Link to="/" className='txt2-login'>Página Principal</Link>
            </div>


          </form>
        </div>
      </div>
    </div>

  );
}

export default Login;
