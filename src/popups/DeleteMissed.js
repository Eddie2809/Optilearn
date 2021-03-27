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
                    <p>¿Seguro que quieres borrar tus sesiones perdidas?</p>
                    <p className="warning">(Esto eliminará permanentemente los repasos que no hiciste y no los podrás hacer en el futuro)</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">No, regresar</button>
                    <button onClick={this.delete} className="delete">Sí, borrar</button>
                </div>
            </div>
        )
    }
}