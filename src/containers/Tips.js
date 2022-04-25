import React,{Component} from 'react'

export default class Tips extends Component{
    constructor(){
        super()
        this.state = {
            rndTip: ""
        }
    }
    componentDidMount(){
        this.setState({rndTip: Math.round(Math.random()*(this.props.p.tips.length-1))})
    }
    render(){
        return(
            <div className="Tips">
                <h4>Tip:</h4>
                <p>{this.props.p.tips[this.state.rndTip]}</p>
            </div>
        )
    }
}