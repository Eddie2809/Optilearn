import React,{Component} from 'react'

export default class ReferencesPopup extends Component{
    constructor(){
        super()
        this.state = {
            references: ""
        }
    }
    componentDidMount(){
        for(let i = 0; i < this.props.topics.length; i++){
            if(this.props.topics[i].id === this.props.topicId){
                this.setState({
                    references: this.props.topics[i].topic_references
                })
                break;
            }
        }
    }
    render(){
        return(
            <div className="ReferencesPopup pop-up">
                <div onClick={()=>this.props.toggleDarkBg(false,0)} className="quit"><div className="right"></div><div className="left"></div></div>
                <p className="title">{this.props.p.ref}</p>
                <div className="box">
                    <p>{this.state.references}</p>
                </div>
            </div>
        )
    }
}