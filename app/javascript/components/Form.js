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
      
      <h3 className="font-weight-bold text-dark">START YOUR ADVENTURE</h3>
      <p className="text-secondary">Tell us about your perfect adventure and we will find you the perfect local.</p>
      
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
        </div>
        <div className="form-group row">
          <label htmlFor="example-number-input" className="col-2 col-form-label">Group Size</label>
          <br/>
          <div className="col-12">
            <input className="form-control" type="number" id="example-number-input" placeHolder="0"/>
          </div>
        </div>
        
        
        {/*<div className="form-group">
          <label for="exampleFormControlInput1">Email Address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>*/}

        <div className="form-group">
          <label htmlFor="location" >What general area will your activities be located?</label>
            <select name="location" className="form-control" id="location" onChange={e => this.change(e)}>
            <option value="-">-</option>
            <option value="northShore">North Shore</option>
            <option value="Waianae">Waianae</option>
            <option value="honolulu">Honolulu</option>
            <option value="kapolei">Kapolei</option>
            <option value="kaneohe">Kaneohe</option>
            </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="language" >Language</label>
            <select name="language" className="form-control" id="language" onChange={e => this.change(e)} placeholder="-">
            <option value="">-</option>
            <option value="eng">English </option>
            <option value="kor">Korean</option>
            <option value="jap">Japanese</option>
            <option value="chi">Mandarin Chinese</option>
            <option value="tag">Tagalog</option>
            </select>
          </div>
          
        <br/>
        <button type="button" class="btn btn-default btn-lg" onClick={e => this.incrementActivity(e)}>
          <i class="fas fa-plus-circle"></i> Add Activity
        </button>
        {this.makeActivities()}
        {this.state.numActivities > 0 ? <button type="button" class="btn btn-default btn-lg" onClick={e => this.incrementActivity(e)}>
          <i class="fas fa-plus-circle"></i> Add Additional Activity
        </button> : null }
        {this.state.numActivities > 0 ? <button onClick={e => this.onSubmit(e)} className="btn btn-red">Submit</button> : null }
        
      </form>
    );
  }
}

export default Form;

