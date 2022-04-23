import React,{Component} from 'react'
import HistoryReview from './HistoryReview'

//this.props: history[[getTime,id,topic name]]
export default class History extends Component{
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

    loadHistoryItems = () => {

        let date
 
        const buildHistoryItems = this.props.history.map((review,i)=>{
            date = new Date(review.date)
            date = (date.getDate()<10? ("0" + (date.getDate())):date.getDate()) + "/" + (date.getMonth()+1<10? ("0" + (date.getMonth()+1)):date.getMonth()+1) + "/" + date.getFullYear()
            return <HistoryReview date={date} name={review.topicName} id={review.id} topicId={review.topicId} numberOfReviews={review.numberOfReviews} numberOfCompletedReviews={review.numberOfCompletedReviews} undoReview={this.props.undoReview}/>
        })

        return buildHistoryItems;
    }

    render(){
        
        return(
            <div ref={this.wrapperRef} className="History tab hide-for-mobile">
                <div className="list">
                    {this.loadHistoryItems()}
                </div>
                <div className="delete-history" onClick={()=>this.props.toggleDarkBg(true,2)}>Limpiar historial</div>
            </div>
        )
    }
}