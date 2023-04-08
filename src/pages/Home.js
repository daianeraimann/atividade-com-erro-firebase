import React from 'react'
import { Link } from "react-router-dom";
import './home.css';

function Home() {

    return (
        <div className='container'>
            <div className='container-home'>
                <div className='wrap-home' >
                    <h1 className='container-titulo'>Página Inicial</h1>
                            <br></br>
                        <div className='container-links'>
                            <Link to="/Contact" className='link-click'>Cadastro</Link>
                        </div>    
                            <br></br>
                        <div className='container-links'>    
                            <Link to="/login" className='link-click'>Login</Link>
                            
                        </div>
                        
                </div>
            </div>    
        </div>

    )
}

export default Home;
  