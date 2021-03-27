import React,{Component} from 'react'

export default class AddCustomizedReviews extends Component{
    constructor(){
        super()
        this.state={
            numberOfReviews: 0,
            name: ""
        }
    }

    generateList = () => {
        let list = []
        for(let i = 0; i < this.state.numberOfReviews; i++){
            list.push(<li><input id="reviewDay" type="number"></input></li>)
        }
        return list
    }

    onSubmit = () => {
        let reviews = []
        let reviewInputElements = document.querySelectorAll("#reviewDay")

        if(this.state.name == ""){
            alert("Por favor ingresa un nombre")
            return
        }
        if(this.state.numberOfReviews<=0){
            alert("Cantidad de repasos inválida")
            return
        }

        for(let i = 0; i < reviewInputElements.length; i++){
            reviews.push(reviewInputElements[i].value)
        }
        reviews.sort()
        for(let i = 0; i < reviews.length-1; i++){
            if(reviews[i]==reviews[i+1]||reviews[i]<0||reviews[i+1]<0||reviews[i]==""||reviews[i+1]==""){
                alert("Entrada inválida: Por favor asegurate que los números sean únicos, positivos y en orden ascendente")
                return
            }
        }
        this.props.newCustomizedReview(this.state.name,reviews)
        this.props.toggleDarkBg(false,0)
    }

    render(){
        return(
            <div className="AddCustomizedReviews pop-up">
                <div onClick={()=>this.props.toggleDarkBg(false,0)} className="quit"><div className="right"></div><div className="left"></div></div>
                <p className="title">Añadir repasos personalizados</p>
                <p className="text"> 
                    Aquí puedes añadir repasos personalizados para los temas que hayas
                    estudiado, simplemente tienes que especificar el número de repasos
                    que quieras hacer y después señalar cada cuándo quieres hacer los
                    repasos. Por ejemplo, si quieres repasar todos los días por una 
                    semana tendrías especificar que son 7 repasos y luego poner los 
                    siguientes números: 1,2,3,4,5,6,7.
                    <strong> Estos repasos serán añadidos permanentemente en tu lista de repasos</strong>
                </p>
                <div>Nombre: <input maxLength="30" id="reviewName" onChange={event=>this.setState({name: event.target.value})}></input></div>
                <div>Número de repasos: <input onChange={event=>this.setState({numberOfReviews: event.target.value})} type="number"></input></div>
                <div className="list"><ul>{this.generateList()}</ul></div>
                <button onClick={this.onSubmit}>Subir</button>
            </div>
        )
    }
}