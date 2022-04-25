import React,{Component} from 'react'

export default class DeleteMissed extends Component{
    delete = () =>{
        this.props.deleteMissed()
        this.props.toggleDarkBg(false,0)
    }
    render(){
        return(
            <div className="DeleteMissed pop-up">
                <div>
                    <p>{this.props.p.areYouSureYouWantToDeleteYourMissedSessions}</p>
                    <p className="warning">{this.props.p.deleteMissedSessionsWarningMessage}</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">{this.props.p.noGoBack}</button>
                    <button onClick={this.delete} className="delete">{this.props.p.yesDelete}</button>
                </div>
            </div>
        )
    }
}