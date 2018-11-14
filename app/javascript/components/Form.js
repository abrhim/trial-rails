import React from "react"
import PropTypes from "prop-types"
import Checkbox from "./Checkbox"
import Activity from"./Activity"

class Form extends React.Component {
  state = {
    
    activities:{},
  	groupSize:0,
	  location:'',
	  date:'',
    language:'',
    numActivities: 0,
    test:'',
    categories: [
            'Hiking',
            'Surfing',
            'Food and Dining',
            'Camping',
            'Social Impact',
            'History/Culture',
            'Concerts/Music',
            'Health & Wellness',
            'Art',
            'Other - elaborate in description below'
      ]
    
  }
  
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    

  
    change = (e) => {
        if(e.target.type === "checkbox"){
          if(e.target.checked){
              this.state.category.push(e.target.value);
          } else {
            delete this.state.category[this.state.category.indexOf(e.target.value)];
          }
        } else {
            this.setState({
              [e.target.name]: e.target.value
            });
        }
    }
    
    incrementActivity = (e) => {
      e.preventDefault();
      var prevNum = this.state.numActivities
      this.setState({numActivities: prevNum+1})
      console.log(this.state.numActivities)
    }
    
    checkboxOnChange = e => { this.change(e) }
    
    

    onSubmit = e => {
        e.preventDefault();
        this.props.onChange(this.state);
    }
    
    decrementActivity = (e) => {
    }
    
    
    onChangeActivity = (updatedValue) => {
      let index = updatedValue.index
      console.log(index)
      //append the activity data to the current running array.
      this.setState(prevState =>({
        activities: {
          ...prevState.activities,
          [updatedValue.index]: updatedValue
      }}))
    }
    
    
    makeActivities = () => {
      let tmpActivities = []
      var i;
      for (i=0;i<this.state.numActivities;i++){
        tmpActivities.push(<Activity index={i} categories={this.state.categories} onChange={fields => {this.onChangeActivity(fields)}}/>)
        tmpActivities.push(<br/>)
      }
      return tmpActivities
    }

  render () {
    return (
      <form>
      
      <h4>Find the Perfect Local</h4>
      <p>Fill out this form and we will use our genius technology to match you with local tour guides that are best for you</p>
      
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Chuck Norris" />
        </div>
        
            
        <div className="form-group">
          <label for="exampleFormControlInput1">Email Address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="location" >What part of the Island do you want to explore?</label>
            <select name="location" className="form-control" id="location" onChange={e => this.change(e)}>
            <option value="northShore">North Shore</option>
            <option value="westSide">West Side</option>
            <option value="honolulu">Honolulu</option>
            <option value="kapolei">Kapolei</option>
            <option value="kaneohe">Kaneohe</option>
            </select>
        </div>
        

        <br/>
        <button type="button" class="btn btn-default btn-lg" onClick={e => this.incrementActivity(e)}>
          <i class="fas fa-plus-circle"></i> Add Activity
        </button>
        {this.makeActivities()}
        {this.state.numActivities > 0 ? <button type="button" class="btn btn-default btn-lg" onClick={e => this.incrementActivity(e)}>
          <i class="fas fa-plus-circle"></i> Add Activity
        </button> : null }
        <button onClick={e => this.onSubmit(e)} className="btn btn-red">Submit</button>
        
      </form>
    );
  }
}

export default Form;

