import React,{Component} from 'react'

export default class DeleteCompletedTopics extends Component{

    deleteTopics = () => {
        for(let i = 0; i < this.props.topics.length; i++){
            if(this.props.topics[i].completed){
                this.props.deleteTopic(this.props.topics[i].id)
            }
        }
        this.props.toggleDarkBg(false,0)
    }
    render(){
        return(
            <div className="DeleteCompletedTopics pop-up">
                <div>
                    <p>{this.props.p.areYouSureYouWantToDeleteYourCompletedTopics}</p>
                    <p className="warning">{this.props.p.deleteCompletedTopicsWarning}</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">{this.props.p.noGoBack}</button>
                    <button onClick={this.deleteTopics} className="delete">{this.props.p.yesDelete}</button>
                </div>
            </div>
        )
    }
}