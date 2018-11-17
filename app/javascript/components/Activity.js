import React from 'react'
import PropTypes from "prop-types"
import Checkbox from "./Checkbox"

class Activity extends React.Component {



    createCheckbox = (value,func,key) => {
      return <Checkbox value={value} func={func} key={key} checked="false"/>;
    }
    checkboxOnChange = e => { this.change(e) }

    
    createCheckboxes = () => {
        let checkboxes = [];
        
        let columnLength = Math.ceil(this.props.categories.length/2);
        let columnOne = []
        let columnTwo = []
        
        var i = 0
        for (i; i < columnLength; i++) {
            console.log(i)
            columnOne.push(this.createCheckbox(this.props.categories[i],this.checkboxOnChange,i));
        }
        for (i; i < columnLength+columnLength-1; i++) {
            console.log(i)
            columnTwo.push(this.createCheckbox(this.props.categories[i],this.checkboxOnChange,i));
        }

        console.log(columnOne)
        console.log(columnTwo)

        return (
            <div className="control-group" style={{/*this is a simple grid with three columns.*/}}>
                <p className="pull-left">Activity Types</p>
                <div className="controls span2">
                    {columnOne}
                </div>
                <div className="controls span2">
                    {columnTwo}
                </div>

            </div>
            )
    }
    
    change = (e) => {
        if(e.target.type === "checkbox"){
          if(e.target.checked){
              this.state.category.push(e.target.value);
          } else {
            delete this.state.category[this.state.category.indexOf(e.target.value)];
          }
        }else {
            this.setState({
              [e.target.name]: e.target.value
            });
        }
        
        this.props.onChange(this.state);
    }
    
    onChange = e => {
        e.this.props.onChange(this.state);
    }
    state = {
        category: [],
        length: '',
        description: '',
        index:this.props.index,
    }
    
    render(){
        return(
            <div class="card w-75" style={{padding: '18px', width: '100%'}}>
                <h4>Activity</h4>
                <hr size="3"/>
                <div className="checkboxes">        
                    {this.createCheckboxes()}
                </div>
                
                <br/>
                <div className="form-group">
                    <label for="length">Duration of activity:</label>
                    <input 
                        name="length"
                        placeholder="4 hours" 
                        value={this.state.length} 
                        onChange={e => this.change(e)}
                        className="form-control"
                    />
                </div>
        
                <br/>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Briefly explain your activity.</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        name="description"
                        placeholder='Description' 
                        value={this.state.description} 
                        onChange={e => this.change(e)}
                    />
                </div>
                <br/>
            </div>
        )
    }
}
export default Activity

Activity.propTypes = {
    categories: PropTypes.array,
    
}
