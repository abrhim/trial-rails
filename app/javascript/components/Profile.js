import React from 'react'
class Profile extends React.Component{
    render(){
        return (
        <div>
        <div className="card" style={{border:'none'}}>
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={this.props.guide.img} className="img-fluid rounded-circle" alt="" height="200" width="200" />
                        </div>
                        <div className="col card-contents">
                            <div className="card-block px-2" style={{marginLeft:"5px"}}>
                                <p className="card-title text-dark" style={{fontSize: '60px',marginBottom:'0px'}}>{this.props.guide.name.toUpperCase()}</p>
                                <p className="card-subtitle">{this.props.guide.location}, Hi</p>
                                <p className="text-muted">{this.props.guide.rating} <i className="fas fa-star"></i>({this.props.guide.numOfRatings})</p>

                            </div>
                        </div>
                    </div>
                    
              </div>
              <br/>
              <br/>
              
              <div style={{marginLeft:"15px"}}>
                <h5>Languages</h5>
                <p>English, {this.props.guide.language}</p>
                <h5>About {this.props.guide.name}</h5>
                <p>Lorem ipsum dolor sit amet, scelerisque leo erat sociosqu vel quis luctus, tincidunt sollicitudin, in lectus cras commodo dui ipsum, nonummy neque felis risus dapibus, nonummy ut. Tincidunt eget urna nam wisi nulla, nisl ac suspendisse arcu. Varius nec nostra fusce fringilla, vehicula est dolor amet metus vehicula urna, elit conubia vestibulum dis mauris, justo natoque nec leo, id lacus lobortis lectus. Feugiat elit dolor, et per vel nostra. Etiam aliquam nunc, felis nec quam, arcu placerat id, in laoreet consectetuer hymenaeos et ut dui, nulla diam ipsum a urna risus congue. Dui pede tortor et, placerat tempus scelerisque porttitor.
                <br/>
                <br/>
                Aliquet quam praesent dui lobortis, amet ac, suscipit mollis venenatis pharetra vestibulum sodales, eros volutpat quam pede sed ligula eleifend, blandit nam lacus id ut inceptos lacus. Nulla velit quisque phasellus nec aliquet, at blandit felis, suscipit turpis enim, ut ipsum ante porta senectus aliquam. Diam id etiam curabitur urna tempor earum, pellentesque aliquet et sed sed, placerat nullam nulla potenti
                </p>
                <a href="#" className="btn btn-red" >Send me your itinerary</a>

              </div>
        </div>
        
        
        
        )
        
    }

}
export default Profile