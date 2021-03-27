import React,{Component} from 'react'
import MissedReview from './MissedReview'
import PropTypes from 'prop-types'

export default class Missed extends Component{
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            setTimeout(()=>{
                this.props.openTab("none")
            },250)
        }
    }

    loadMissedItems = () => {

        let date
 
        const buildMissedItems = this.props.missed.map((review,i)=>{
            date = new Date(review.date)
            date = (date.getDate()<10? ("0" + (date.getDate())):date.getDate()) + "/" + (date.getMonth()+1<10? ("0" + (date.getMonth()+1)):date.getMonth()+1) + "/" + date.getFullYear()
            return <MissedReview toggleDarkBg={this.props.toggleDarkBg} doReview={this.props.doReview} date={date} name={review.topicName} id={review.id} topicId={review.topicId} numberOfCompletedReviews={review.numberOfCompletedReviews} numberOfReviews={review.numberOfReviews} undoReview={this.props.undoReview}/>
        })

        return buildMissedItems;
    }
    render(){
        return(
            <div ref={this.wrapperRef} className="Missed tab hide-for-mobile">
                <div className="list">{this.loadMissedItems()}</div>
                <div className="delete-missed-reviews" onClick={()=>this.props.toggleDarkBg(true,4)}>Borrar todo</div>
            </div>
        )
    }
}