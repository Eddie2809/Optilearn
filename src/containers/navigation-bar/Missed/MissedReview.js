import React,{Component} from 'react'

export default class MissedReview extends Component{
    render(){
        return(
            <div className="list-item">
                <svg onClick={()=>this.props.toggleDarkBg(true,3,this.props.id)} xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15">
                    <title>{this.props.p.reschedule}</title>
                    <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,13.594A1.4,1.4,0,0,0,1.393,15H11.607A1.4,1.4,0,0,0,13,13.594V5.625H0ZM9.286,7.852A.351.351,0,0,1,9.634,7.5h1.161a.351.351,0,0,1,.348.352V9.023a.351.351,0,0,1-.348.352H9.634a.351.351,0,0,1-.348-.352Zm0,3.75a.351.351,0,0,1,.348-.352h1.161a.351.351,0,0,1,.348.352v1.172a.351.351,0,0,1-.348.352H9.634a.351.351,0,0,1-.348-.352ZM5.571,7.852A.351.351,0,0,1,5.92,7.5H7.08a.351.351,0,0,1,.348.352V9.023a.351.351,0,0,1-.348.352H5.92a.351.351,0,0,1-.348-.352Zm0,3.75a.351.351,0,0,1,.348-.352H7.08a.351.351,0,0,1,.348.352v1.172a.351.351,0,0,1-.348.352H5.92a.351.351,0,0,1-.348-.352ZM1.857,7.852A.351.351,0,0,1,2.205,7.5H3.366a.351.351,0,0,1,.348.352V9.023a.351.351,0,0,1-.348.352H2.205a.351.351,0,0,1-.348-.352Zm0,3.75a.351.351,0,0,1,.348-.352H3.366a.351.351,0,0,1,.348.352v1.172a.351.351,0,0,1-.348.352H2.205a.351.351,0,0,1-.348-.352Zm9.75-9.727H10.214V.469A.468.468,0,0,0,9.75,0H8.821a.468.468,0,0,0-.464.469V1.875H4.643V.469A.468.468,0,0,0,4.179,0H3.25a.468.468,0,0,0-.464.469V1.875H1.393A1.4,1.4,0,0,0,0,3.281V4.687H13V3.281A1.4,1.4,0,0,0,11.607,1.875Z" fill="#00adb5"/>
                </svg>

                <p className="name">{this.props.name}</p>
                <p className="date">{this.props.date}</p>
                <div onClick={()=>this.props.doReview(this.props.id,this.props.topicId,this.props.numberOfCompletedReviews,this.props.numberOfReviews)} className="checkbox"></div>  
            </div>
        )
    }
}