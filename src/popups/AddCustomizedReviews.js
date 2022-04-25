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

        if(this.state.name === ""){
            alert(this.props.p.pleaseEnterAName)
            return
        }
        if(this.state.numberOfReviews<=0){
            alert(this.props.p.invalidNumberOfReviews)
            return
        }

        for(let i = 0; i < reviewInputElements.length; i++){
            reviews.push(reviewInputElements[i].value)
        }
        reviews.sort()
        for(let i = 0; i < reviews.length-1; i++){
            if(reviews[i] === reviews[i+1]||reviews[i]<0||reviews[i+1]<0||reviews[i] === ""||reviews[i+1] === ""){
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
                <p className="title">{this.props.p.addCustomizedReviews}</p>
                <p className="text">{this.props.p.addCustomizedReviewsMessage}<strong>{' ' + this.props.p.addCustomizedReviewsWarning}</strong></p>
                <div>{this.props.p.name + ': '}<input maxLength="30" id="reviewName" onChange={event=>this.setState({name: event.target.value})}></input></div>
                <div>{this.props.p.numberOfReviews + ': '}<input onChange={event=>this.setState({numberOfReviews: event.target.value})} type="number"></input></div>
                <div className="list"><ul>{this.generateList()}</ul></div>
                <button onClick={this.onSubmit}>{this.props.p.done}</button>
            </div>
        )
    }
}