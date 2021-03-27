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
                    <p>¿Seguro que quieres los temas completados?</p>
                    <p className="warning">(Esto eliminará permanentemente los temas los cuales todos sus repasos ya hayan sido completados)</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">No, regresar</button>
                    <button onClick={this.deleteTopics} className="delete">Sí, borrar</button>
                </div>
            </div>
        )
    }
}