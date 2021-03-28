import React,{Component} from 'react'
import validator from 'email-validator'

export default class Signin extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            passwordVerification: "",
            securityCode: ""
        }
    }
    onSubmit = () => {
        if(this.state.securityCode!="moreletii2021"){
            alert("No tienes permiso para registrarte")
            return
        }
        if(!validator.validate(this.state.email)){
            alert("Correo no válido")
            return
        }
        if(this.state.passwordVerification!=this.state.password){
            alert("Las contraseñas no coinciden")
            return
        }
        if(!this.state.name||!this.state.lastname||!this.state.email||!this.state.password||!this.state.passwordVerification){
            alert("Por favor rellena todos los campos")
            return
        }
        
        fetch('https://tranquil-meadow-47562.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                lastname: this.state.lastname
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user != "Authentication failed"){
                this.props.onChangeRoute('login')
            }
        })   
    }
    render(){
        return(
            <div className="Signin">
                <div className="form">
                    <p>Registrarte</p>
                    <div>
                        <input onChange={event=>this.setState({name: event.target.value})} placeholder="Nombre(s)" type="text"></input>
                        <input onChange={event=>this.setState({lastname: event.target.value})} placeholder="Apellido(s)" type="text"></input>
                        <input onChange={event=>this.setState({email: event.target.value})} placeholder="Correo" type="email"></input>
                        <input onChange={event=>this.setState({password: event.target.value})} placeholder="Contraseña" type="password"></input>
                        <input onChange={event=>this.setState({passwordVerification: event.target.value})} placeholder="Repite tu contraseña" type="password"></input>
                        <input onChange={event=>this.setState({securityCode: event.target.value})} placeholder="Código de seguridad" type="password"></input>
                    </div> 
                    <button onClick={this.onSubmit}>Subir</button>
                    <p onClick={()=>this.props.onChangeRoute("login")} className="signin-link">Iniciar Sesión</p>
                </div>
            </div>
        )
    }
}