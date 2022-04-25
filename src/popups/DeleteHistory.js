import React,{Component} from 'react'

export default class DeleteHistory extends Component{
    delete = () => {
        this.props.deleteHistory()
        this.props.toggleDarkBg(false,0)
    }
    render(){
        return(
            <div className="DeleteHistory pop-up">
                <div>
                    <p>{this.props.p.areYouSureYouWantToDeleteYourHistory}</p>
                    <p className="warning">{this.props.p.deleteHistoryWarningMessage}</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">{this.props.p.noGoBack}</button>
                    <button onClick={this.delete} className="delete">{this.props.p.yesDelete}</button>
                </div>
            </div>
        )
    }
}