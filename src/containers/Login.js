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
        this.props.toggleDarkBg(true,10)
        fetch('https://tranquil-meadow-47562.herokuapp.com/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user === "Authentication failed"){
                alert("Credenciales no válidas")
                this.props.toggleDarkBg(false,0)
            }
            else{
                fetch('https://tranquil-meadow-47562.herokuapp.com/generate-sid', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        userId: user.id,
                    })
                })
                .then(res => res.json())
                .then(res => {
                    let expirationDate = new Date()
                    expirationDate.setTime(expirationDate.getTime() + (1000*60*60*24*30))
                    let newCookie =  'SID=' + res + ';expires=' + expirationDate + ';'
                    document.cookie = newCookie
                    console.log(newCookie)
                })

                this.props.getUserData(user)
                this.props.onChangeRoute('home')
                this.props.toggleDarkBg(false,0)
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
                    <p className="signin-link" onClick={()=>this.props.onChangeRoute('signup')}>Regístrate</p>
                </div>
            </div>
        )
    }
}