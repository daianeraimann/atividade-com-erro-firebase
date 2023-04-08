import React, { Component, useState } from 'react';
import './cadastro.css';
import { Link } from "react-router-dom";
import firebase from 'firebase';


class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dataNascimento: ""
        }
        this.gravar = this.gravar.bind(this);
    }
    gravar (){
        firebase.firestore().collection("usuario").add({
            email: this.state.email,
            senha: this.state.senha,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dataNascimento: this.state.dataNascimento

        });
    }
    


render(){
    return (
        <div className='container'>
            <div className='container-cadastro'>
                <div className="wrap-cadastro">
                    <h2 className='login-cadastro-title'>Cadastro</h2>
                    <form  className='login-form'>

                        <label className='wrap-input-cadastro'>
                            Email
                        <input className='input-cadastro' 
                        type="email"  
                        onChange={(e) => this.setState({email: e.target.value})} />
                        </label>

                        <label className='wrap-input-cadastro'>
                            Senha
                        <input className='input-cadastro'  
                        type="text"  
                        onChange={(e) => this.setState({senha: e.target.value})} />
                        </label>

                        <label className='wrap-input-cadastro'>
                            Nome
                        <input className='input-cadastro'  
                        type="text"  
                        onChange={(e) => this.setState({nome: e.target.value})} />
                        </label>
                        
                        <label className='wrap-input-cadastro'>
                            Sobrenome
                        <input className='input-cadastro'  
                        type="text"  
                        onChange={(e) => this.setState({sobrenome: e.target.value})} />
                        </label>
                        
                        <label className='wrap-input-cadastro'>
                        Data de Nascimento
                        <input className='input-cadastro'  
                        type="date"  
                        onChange={(e) => this.setState({dataNascimento: e.target.value})} />
                        </label>

                        <div className='container-login-cadastro-btn'>
                        <button onClick={this.gravar} className='login-cadastro-btn'>Cadastrar</button>
                        </div>

                        <div className='text-center'>
                            <span className='txt1'>Já possui cadastro? </span>
                            <Link to="/login" className='txt2' >Fazer login.</Link>
                        </div>
                    </form>
                </div>    
            </div>
        </div>
  );
    } 
}

export default Cadastro;