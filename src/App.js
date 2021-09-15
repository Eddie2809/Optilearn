import React,{Component} from 'react'
import Login from './containers/Login'
import Signup from './containers/Signup'
import NewSessionAndTimerContainer from './containers/NewSessionAndTimerContainer'
import UpcomingReviews from './containers/UpcomingReviews/UpcomingReviews'
import Tips from './containers/Tips'
import TopNav from './containers/navigation-bar/TopNav';
import AddCustomizedReviews from './popups/AddCustomizedReviews'
import DeleteHistory from './popups/DeleteHistory'
import EditTopic from './popups/EditTopic'
import DeleteMissed from './popups/DeleteMissed'
import DeleteTopic from './popups/DeleteTopic'
import Reschedule from './popups/Reschedule'
import ReferencesPopup from './popups/ReferencesPopup'
import DeleteCompletedTopics from './popups/DeleteCompletedTopics'
import Calendar from './components/Calendar'
import OpenCalendar from './components/OpenCalendar'
import Loading from './popups/Loading'
import './styles/style.css'

const tips = [
  "Puedes hacer repasos personalizados desde configuración",
  "Nunca te rindas:)",
  "En referencias puedes incluir tus referencias donde estudiaste o hacer anotaciones del tema",
  "No hagas más de 3 sesiones nuevas a la semana para no acumular tantos repasos en un día",
  "En el calendario puedes ver todos los repasos pendientes, en la sección \"Próximos repasos\" solo puedes ver los próximos 20 repasos",
  "Si marcaste como completado un repaso por accidente puedes arreglarlo en la pestaña de historial",
  "En la pestaña \"Mis temas\" puedes editar la fecha de los repasos y todo lo relacionado con un tema registrado",
  "Nunca dejes de aprender",
  "Puedes ver las referencias de un tema presionando el botón \"Editar\" en la pestaña de \"Mis temas\" o presionando el icono de libro en próximos repasos",
  "Si tienes muchos repasos acumulados para un día los puedes reagendar la pestaña \"Mis temas\""
]
const rndTip = Math.round(Math.random()*(tips.length-1))

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'login',
      darkBg: false,
      isLoggedIn: false,
      popup: 0,
      reviewIndexForReschedule: -1,
      topicIdForEdit: -1,
      user: {
        id: '',
        name: '',
        lastname: '',
        email: ''
      },
      userCustomizedReviews: [],
      topics: [],
      reviews: [],
      history: [],
      missed: [],
      upcomingReviews: []
    }
  }

  newCustomizedReview = (name,days) => {
    this.toggleDarkBg(true,10)
    fetch('https://tranquil-meadow-47562.herokuapp.com/new-customized-review', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          name: name,
          days: days,
          userId: this.state.user.id,
      })
    })
    .then(response=>response.json())
    .then(res=>{
      this.getUserData(this.state.user)
      this.toggleDarkBg(false,0)
    })
  }

  editTopic = (newTopicName, newReferences,topicId) => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/edit-topic', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          topicId: topicId,
          userId: this.state.user.id,
          newReferences: newReferences,
          newTopicName: newTopicName
      })
    })
    .then(response=>response.json())
    .then(res => {
      this.getUserData(this.state.user)
    })
  }

  logOut = () => {
    this.setState({
      route: 'login',
      darkBg: false,
      isLoggedIn: false,
      popup: 0,
      reviewIndexForReschedule: -1,
      topicIdForEdit: -1,
      user: {
        id: '',
        name: '',
        lastname: '',
        email: ''
      },
      topics: [],
      reviews: [],
      history: [],
      missed: [],
      upcomingReviews: []
    })
  }

  onChangeRoute = (route) => {
    this.setState({
      route: route
    })
  }

  newTopic = (topicName,references,date,reviewArray) => {
    this.toggleDarkBg(true,10)
    fetch('https://tranquil-meadow-47562.herokuapp.com/new-topic', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          name: topicName,
          firstSessionDate: date,
          topicReferences: references,
          reviewArray: reviewArray,
          id: this.state.user.id,
      })
    })
    .then(response=>response.json())
    .then(res => {
        this.getUserData(this.state.user)
        this.getUserData(this.state.user)
        this.toggleDarkBg(false,0)
    })
  }

  deleteTopic = (topicId) => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/delete-topic', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: this.state.user.id,
        topicId: topicId
      })
    })
    .then(response=>response.json())
    .then(response=>{
      this.getUserData(this.state.user)
    })
  }

  deleteMissed = () => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/delete-missed', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: this.state.user.id
      })
    })
    .then(response=>response.json())
    .then(response=>{
      this.getUserData(this.state.user)
    })
  }

  deleteHistory = () => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/delete-history', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: this.state.user.id
      })
    })
    .then(response=>response.json())
    .then(response =>{
      this.getUserData(this.state.user)
    })

  }

  //selector: 1=Edit, 2=Missed
  reschedule = (reviewId,date,selector) => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/reschedule', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        reviewId: reviewId,
        date: date
      })
    })
    .then(response=>response.json())
    .then(response=>{
      this.getUserData(this.state.user)
    })
  }

  /*popup:  0=none
            1=edit topic
            2=delete history
            3=reschedule
            4=delete missed
            5=add customized review 
            6=delete topic
            7=references
            8=delete completed topics
            9=calendar
            10=loading*/
  toggleDarkBg = (toggle,selector,id) => {
    this.setState({
      popup: 0,
      darkBg: false
    })
    if(selector===3){
      this.setState({
        reviewIndexForReschedule: id
      })
    }
    else if(selector==1||selector==6||selector==7){
      this.setState({
        topicIdForEdit: id
      })
    }
    this.setState({
      popup: selector,
      darkBg: toggle
    })
  }

  undoReview = (reviewId,topicId,numberOfCompletedReviews,numberOfReviews) => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/undo-review', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        reviewId: reviewId,
        topicId: topicId,
        numberOfReviews: numberOfReviews,
        numberOfCompletedReviews: numberOfCompletedReviews
      })
    })
    .then(response=>response.json())
    .then(response=>{
      this.getUserData(this.state.user)
    })
  }

  doReview = (reviewId,topicId,numberOfCompletedReviews,numberOfReviews) => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/do-review', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        reviewId: reviewId,
        topicId: topicId,
        numberOfReviews: numberOfReviews,
        numberOfCompletedReviews: numberOfCompletedReviews
      })
    })
    .then(response=>response.json())
    .then(response=>{
        this.getUserData(this.state.user)
    })
  }

  loadUser = (user,topics,reviews,userCustomizedReviews) =>{
    let today = new Date(new Date().toDateString())
    let topicMapIdName = new Map()
    let topicMapIdIndex = new Map()
    let history = []
    let time

    for(let i = 0;i<topics.length;i++){
      topicMapIdName[topics[i].id] = topics[i].name
      topicMapIdIndex[topics[i].id] = i
    }

    for(let i = 0;i<reviews.length;i++){
      if(reviews[i].done){
        time = new Date((reviews[i].review_date).slice(0,10)+'T00:00:00')
        history.push({
          date: time.getTime(),
          id: reviews[i].id,
          topicName: topicMapIdName[reviews[i].topic_id],
          topicId: reviews[i].topic_id,
          numberOfReviews: topics[topicMapIdIndex[reviews[i].topic_id]].number_of_reviews,
          numberOfCompletedReviews: topics[topicMapIdIndex[reviews[i].topic_id]].number_of_completed_reviews
        })
      }
    }   
    
    //Conseguir sesiones perdidas ordenadas por fecha
    let missed = []
    for(let i = 0; i<reviews.length;i++){
      time = new Date((reviews[i].review_date).slice(0,10)+'T00:00:00')
      if(time.getTime()<today.getTime()&&!reviews[i].done){
        missed.push({
          date: time.getTime(),
          id: reviews[i].id,
          topicName: topicMapIdName[reviews[i].topic_id],
          topicId: reviews[i].topic_id,
          numberOfReviews: topics[topicMapIdIndex[reviews[i].topic_id]].number_of_reviews,
          numberOfCompletedReviews: topics[topicMapIdIndex[reviews[i].topic_id]].number_of_completed_reviews
        })
      }
    }

    //Conseguir proximas sesiones ordenadas por fecha
    let upcomingReviews = []
    for(let i = 0; i<reviews.length;i++){
      time = new Date((reviews[i].review_date).slice(0,10)+'T00:00:00')
      if(time.getTime()>=today.getTime()&&!reviews[i].done){
        
        upcomingReviews.push({
          date: time.getTime(),
          id: reviews[i].id,
          topicName: topicMapIdName[reviews[i].topic_id],
          topicId: reviews[i].topic_id,
          numberOfReviews: topics[topicMapIdIndex[reviews[i].topic_id]].number_of_reviews,
          numberOfCompletedReviews: topics[topicMapIdIndex[reviews[i].topic_id]].number_of_completed_reviews
        })
      }
    }

    history.sort((a, b) => a.date - b.date)
    history.reverse()
    upcomingReviews.sort((a, b) => a.date - b.date)
    missed.sort((a, b) => a.date - b.date);
    missed.reverse()

    this.setState({
      user: {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
      },
      userCustomizedReviews: userCustomizedReviews,
      reviews: reviews,
      history: history,
      missed: missed,
      topics: topics,
      upcomingReviews: upcomingReviews
    })
  }

  getUserData = (user) => {
    fetch('https://tranquil-meadow-47562.herokuapp.com/topics', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: user.id,
      })
    })
    .then(response=>response.json())
    .then(topics=>{
      fetch('https://tranquil-meadow-47562.herokuapp.com/reviews',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId: user.id
        })
      })
      .then(response=>response.json())
      .then(reviews=>{
        fetch('https://tranquil-meadow-47562.herokuapp.com/get-customized-reviews',{
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            userId: user.id
          })
        })
        .then(response=>response.json())
        .then(userCustomizedReviews=>{
          this.loadUser(user,topics,reviews,userCustomizedReviews)
        })
      })
    })
  }

  render(){
    return (
      <div className="App">
          {this.state.darkBg?
          <div>
            <div className="dark-background"></div>
            {this.state.popup===1?
              <EditTopic editTopic={this.editTopic} toggleDarkBg={this.toggleDarkBg} reviews={this.state.reviews} topics={this.state.topics} topicId={this.state.topicIdForEdit}/>:
              this.state.popup===2?
              <DeleteHistory deleteHistory={this.deleteHistory} toggleDarkBg={this.toggleDarkBg}/>:
              this.state.popup===3?
              <Reschedule toggleDarkBg={this.toggleDarkBg} reschedule={this.reschedule} reviewId={this.state.reviewIndexForReschedule}/>:
              this.state.popup===4?
              <DeleteMissed deleteMissed={this.deleteMissed} toggleDarkBg={this.toggleDarkBg}/>:
              this.state.popup===5?
              <AddCustomizedReviews newCustomizedReview={this.newCustomizedReview} toggleDarkBg={this.toggleDarkBg}/>:
              this.state.popup===6?
              <DeleteTopic topicId={this.state.topicIdForEdit} toggleDarkBg={this.toggleDarkBg} deleteTopic = {this.deleteTopic}/>:
              this.state.popup===7?
              <ReferencesPopup topics={this.state.topics} topicId={this.state.topicIdForEdit} toggleDarkBg={this.toggleDarkBg}/>:
              this.state.popup===8?
              <DeleteCompletedTopics topics={this.state.topics} toggleDarkBg={this.toggleDarkBg} deleteTopic={this.deleteTopic}/>:
              this.state.popup===9?
              <Calendar toggleDarkBg={this.toggleDarkBg} topics={this.state.topics} reviews={this.state.reviews}/>:
              this.state.popup===10?
              <Loading/>:
              ''
            }
          </div>
          :''}
          {this.state.route === 'home'?
            <div className="body">
              <TopNav logOut={this.logOut} doReview={this.doReview} toggleDarkBg={this.toggleDarkBg} history={this.state.history} missed={this.state.missed} topics={this.state.topics} undoReview={this.undoReview}/>
              <OpenCalendar toggleDarkBg={this.toggleDarkBg}/>
              <div className="body-content">
                <UpcomingReviews toggleDarkBg={this.toggleDarkBg} doReview={this.doReview} upcomingReviews={this.state.upcomingReviews}/>
                <div className="hide-for-mobile">
                  <NewSessionAndTimerContainer userCustomizedReviews={this.state.userCustomizedReviews} newTopic={this.newTopic} toggleDarkBg={this.toggleDarkBg}/>
                  <Tips tip={tips[rndTip]}/>
                </div>
              </div>
            </div>
            :this.state.route=="login"?
            <Login toggleDarkBg={this.toggleDarkBg} getUserData={this.getUserData} onChangeRoute={this.onChangeRoute}/>
            :
            <Signup onChangeRoute={this.onChangeRoute}/>
          }
          
      </div>
    );
  }
}