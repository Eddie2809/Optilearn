import React,{Component} from 'react'

export default class TopicItem extends Component{
    componentDidMount(){
    }
    render(){
        return(
            <div className="TopicItem list-item hide-for-mobile">
                <p className="name">{this.props.name}</p>
                <button className="delete" onClick={()=>this.props.toggleDarkBg(true,6,this.props.id)}>{this.props.p.delete}</button>
                <button onClick={()=>this.props.toggleDarkBg(true,1,this.props.id)}>{this.props.p.edit}</button>
            </div>
        )
    }
}