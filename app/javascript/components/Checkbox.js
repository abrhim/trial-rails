import React from "react"
import PropTypes from "prop-types"
class Checkbox extends React.Component {
    
    state = {
        
    }

    render(){
        return (
            <div>
            <input
            name="category"
            id="fancy-checkbox-default"
            autocomplete="off"
            value={this.props.value}
            type="checkbox"
            placeholder={this.props.placeholder}
            onChange={this.props.func}/>
            <label>&nbsp;&nbsp;{this.props.value}</label>
            </div>
            );
    }
}
export default Checkbox
