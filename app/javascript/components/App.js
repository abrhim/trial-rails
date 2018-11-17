import React from 'react'
//import './App.css';
import Form from './Form';
import Results from './Results';

import PropTypes from "prop-types"


class App extends React.Component {


  state = {
    showResults: false,
    fields:{

    }
  }
  
  getInitialState = () => {
        return { showResults: false,
                 showProfile: false,
        };
    }

  onChange = updatedValue => {
    console.log(this.state.index)
    //console.log("APP Comp got ", updatedValue);
    this.setState({ showResults: true });
    this.setState({ 
      fields: {
        ...this.state.fields,
        ...updatedValue 
      }
    })
  }
  
  showProfile = resultsState => {
    this.setState({showProfile: true,showResults:false})
    this.setState({rState: resultsState })
  }
  
  render() {
    return (      
      <div className="App">
        <div id="formPage">
        {this.state.showResults ? null : <Form class="form" onChange={fields => {this.onChange(fields)}} />}
        {this.state.showResults ? <Results class="results" onShowProfile={resultsState => {this.showProfile(resultsState)}} query={this.state.fields}/> : null }
        </div>
      </div>
    );
  }
}

export default App;
