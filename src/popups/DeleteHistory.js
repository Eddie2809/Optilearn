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
                    <p>¿Seguro que quieres borrar el historial?</p>
                    <p className="warning">(Esto eliminará los repasos que ya hayas hecho de tu historial y del registro del tema al que pertenezca)</p>
                </div>
                <div>
                    <button onClick={()=>this.props.toggleDarkBg(false,0)} className="cancel">No, regresar</button>
                    <button onClick={this.delete} className="delete">Sí, borrar</button>
                </div>
            </div>
        )
    }
}