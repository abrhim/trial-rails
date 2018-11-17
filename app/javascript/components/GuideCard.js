import React from 'react'
import PropTypes from "prop-types"
import Profile from './Profile'

class GuideCard extends React.Component{
    state = {
        
    }
    
    //img = image
    //guide = guide
    //key = index
    //image
    //create box
    //put name on the top
    //information about them beneath
    //Send itinerary button on right
    render(){
        
        //console.log(this.props)
        let rating = this.props.guide.rating;
        return(
            <div>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={this.props.guide.img} className="img-fluid" alt="" height="200" width="200"/>
                        </div>
                        <div className="col card-contents">
                            <div className="card-block px-2">
                                <h4 className="card-title text-dark">{this.props.guide.name}</h4>

                                <h6 className="card-subtitle mb-2 text-muted">I'm super local. Check out my page.</h6>
                                <p style={{marginBottom: '5px'}} className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies accumsan dictum. In vel lectus vitae felis vulputate pretium et vitae nulla. Integer nec convallis mi, euismod rutrum nisl.</p>
                                <p className="text-muted">{this.props.guide.rating} <i className="fas fa-star"></i>({this.props.guide.numOfRatings})</p>
                                <a href="#" className="btn btn-red" >Send me your itinerary</a>
                                <button href="#" className="btn btn-red" onClick={(e) => {this.props.showProfile(e,this.props.guide)}} >See my Profile</button>
                            </div>
                        </div>
                    </div>
                    
              </div>
              <br/>
              <br/>
          </div>
              



            )
    }
    
    
}
export default GuideCard