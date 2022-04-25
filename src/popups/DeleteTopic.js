import React,{Component} from 'react'

export default class DeleteTopic extends Component{
    deleteTopic = () => {
        this.props.deleteTopic(this.props.topicId)
        this.props.toggleDarkBg(false,0)
    }
    render(){
        return(
            <div className="DeleteTopic pop-up">
                <div>
                    <p>{this.props.p.areYouSureYouWantToDeleteThisTopic}</p>
                    <p className="warning">{this.props.p.deleteTopicWarning}</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">{this.props.p.noGoBack}</button>
                    <button onClick={this.deleteTopic} className="delete">{this.props.p.yesDelete}</button>
                </div>
            </div>
        )
    }
}