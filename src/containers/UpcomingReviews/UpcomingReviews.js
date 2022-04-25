import React,{Component} from 'react'
import UpcomingReview from './UpcomingReview'

export default class UpcomingReviews extends Component{

    render(){
        const loadReviews = this.props.upcomingReviews.map((review,i)=>{
            if(i>=20){
                return null;
            }
            return <UpcomingReview p={this.props.p} toggleDarkBg={this.props.toggleDarkBg} doReview={this.props.doReview} date={review.date} name={review.topicName} id={review.id} topicId={review.topicId} numberOfReviews={review.numberOfReviews} numberOfCompletedReviews={review.numberOfCompletedReviews} undoReview={this.props.undoReview}/>
        })
        return(
            <div className="UpcomingReviews">
                <div className="title">{this.props.p.upcomingReviews}</div>
                <div className="upcomingReviewsList">{loadReviews}</div>
            </div>
        )
    }
}