import React,{Component} from 'react'

export default class Tips extends Component{
    render(){
        return(
            <div className="Tips">
                <h4>Tip:</h4>
                <p>{this.props.tip}</p>
            </div>
        )
    }
}