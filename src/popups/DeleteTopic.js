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
                    <p>¿Seguro que quieres borrar este tema?</p>
                    <p className="warning">(Esto eliminará permanentemente este tema junto con sus referencias y sus respectivos repasos)</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">No, regresar</button>
                    <button onClick={this.deleteTopic} className="delete">Sí, borrar</button>
                </div>
            </div>
        )
    }
}