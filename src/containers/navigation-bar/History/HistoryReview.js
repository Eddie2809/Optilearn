import React,{Component} from 'react'

//props: date,name,id
export default class HistoryReview extends Component{
    render(){
        return(
            //reviewId,topicId,numberOfCompletedReviews,numberOfReviews
            <div className="list-item">
                <p className="name">{this.props.name}</p>
                <p className="date">{this.props.date}</p>
                <input type="checkbox" checked onClick={()=>this.props.undoReview(this.props.id,this.props.topicId,this.props.numberOfCompletedReviews,this.props.numberOfReviews)}/>
            </div>
        )
    }
}