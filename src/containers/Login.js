import React,{Component} from 'react'
import Logo from '../img/logo.png'

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    onSubmit = () => {
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user=="Authentication failed"){
                alert("Credenciales no válidas")
            }
            else{
                this.props.getUserData(user)
                this.props.onChangeRoute('home')
            }
        })
    }
    render(){
        return(
            <div className="Login">
                <img src={Logo} alt="logo"></img>
                <div className="form">
                    <p>Ingresar</p>
                    <input onChange={event=>this.setState({email: event.target.value})} placeholder="correo" type="email"></input>
                    <input onChange={event=>this.setState({password: event.target.value})} placeholder="contraseña" type="password"></input>
                    <button onClick={this.onSubmit}>Iniciar sesión</button>
                    <p className="signin-link" onClick={()=>this.props.onChangeRoute('signin')}>Regístrate</p>
                </div>
            </div>
        )
    }
}