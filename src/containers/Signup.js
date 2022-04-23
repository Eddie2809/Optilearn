import React,{Component} from 'react'
import validator from 'email-validator'

export default class Signup extends Component{
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
        if(this.state.securityCode !== "moreletii2021"){
            alert("Please, type the security code to sign up")
            return
        }
        if(!validator.validate(this.state.email)){
            alert("Invalid email")
            return
        }
        if(this.state.passwordVerification !== this.state.password){
            alert("Passwords don't match")
            return
        }
        if(!this.state.name||!this.state.lastname||!this.state.email||!this.state.password||!this.state.passwordVerification){
            alert("Please, fill in all fields.")
            return
        }
        this.props.toggleOnLS()
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
            if(user !== "Authentication failed"){
                this.props.onChangeRoute('login')
            }
            this.props.toggleOffLS()
        })   
    }
    render(){
        return(
            <div className="Signup">
                <div className="form">
                    <p>Register</p>
                    <div>
                        <input onChange={event=>this.setState({name: event.target.value})} placeholder="Name" type="text"></input>
                        <input onChange={event=>this.setState({lastname: event.target.value})} placeholder="Lastname" type="text"></input>
                        <input onChange={event=>this.setState({email: event.target.value})} placeholder="Email" type="email"></input>
                        <input onChange={event=>this.setState({password: event.target.value})} placeholder="Password" type="password"></input>
                        <input onChange={event=>this.setState({passwordVerification: event.target.value})} placeholder="Repeat your password" type="password"></input>
                        <input onChange={event=>this.setState({securityCode: event.target.value})} placeholder="Security code" type="password"></input>
                    </div> 
                    <button onClick={this.onSubmit}>Sign up</button>
                    <p onClick={()=>this.props.onChangeRoute("login")} className="signup-link">Sign in</p>
                </div>
            </div>
        )
    }
}