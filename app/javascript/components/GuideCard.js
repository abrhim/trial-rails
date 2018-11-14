import React from 'react'
import PropTypes from "prop-types"

class GuideCard extends React.Component{
    
    star = (<i className="fas fa-star"></i>);

    //img = image
    //guide = guide
    //key = index
    //image
    //create box
    //put name on the top
    //information about them beneath
    //Send itinerary button on right
    render(){
        let rating = this.props.guide.rating;
        return(
            <div>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={this.props.img} className="img-fluid" alt="" height="200" width="200"/>
                        </div>
                        <div className="col">
                            <div className="card-block px-2">
                                <h4 className="card-title">{this.props.guide.name}</h4>

                                <h6 className="card-subtitle mb-2 text-muted">My subtitle that tells you about me.</h6>
                                <p style={{marginBottom: '5px'}} className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies accumsan dictum. In vel lectus vitae felis vulputate pretium et vitae nulla. Integer nec convallis mi, euismod rutrum nisl.</p>
                                <p className="text-muted">{this.props.guide.rating} <i className="fas fa-star"></i>({this.props.guide.numOfRatings})</p>
                                <p><a href="#" className="btn btn-red" style={{position: "absolute", bottom: 3, margin: 'auto',float:"right"}}>Send me your itinerary</a></p>
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