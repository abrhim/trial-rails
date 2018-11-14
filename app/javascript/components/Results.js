import React from 'react'
import PropTypes from "prop-types"
import GuideCard from './GuideCard'

import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.png';
import pic5 from '../../assets/images/pic5.jpeg';
import pic6 from '../../assets/images/pic6.png';
import pic7 from '../../assets/images/pic7.jpg';
import pic8 from '../../assets/images/pic8.jpg';
import pic9 from '../../assets/images/pic9.jpg';
import pic10 from '../../assets/images/pic10.jpg';
import pic11 from '../../assets/images/pic11.jpg';
import pic12 from '../../assets/images/pic12.jpg';
import pic13 from '../../assets/images/pic13.jpg';
import pic14 from '../../assets/images/pic14.jpg';
import pic15 from '../../assets/images/pic15.png';
import pic16 from '../../assets/images/pic16.jpg';
import pic17 from '../../assets/images/pic17.jpg';
import pic18 from '../../assets/images/pic18.jpg';
import pic19 from '../../assets/images/pic19.jpg'; 
import pic20 from '../../assets/images/pic20.jpg'; 


class Results extends React.Component{
    state = {
        guidesDB: [],
        query: {},
        guides: [],
        pictures: [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14,pic15,pic16,pic17,pic18,pic19,pic20],
    }
    
    tmpState = {
        query:{},
        
    }
    componentWillMount(){
        this.populateDB();
       // console.log(this.state.guidesDB)
    }
    
    buildCard = (img,guide,id,rating) => {
        //console.log(id)
        return <GuideCard img={img} guide={guide} id={id+1} key={id} rating={rating}/>;
    }
    
    buildCards = (guides) => {
        
      let cards = [];
      for (let i = 0; i < guides.length; i++) {
        //console.log(i);
        cards.push(this.buildCard(guides[i].img,guides[i],i,guides[i].rating));
      }
     // console.log(cards.length)
      return cards;
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    
    render(){
        this.tmpState.query = this.props.query;
        return(
            <div>
                <h3>Locals for you</h3>
                <p>This is the list of locals we have algorithmically calculated for you! <a href="#" className="btn btn-red" style={{float:"right"}} >Send itinerary to all </a></p>
                <br/>
                <div className="cards">
                    {this.buildCards(this.findGuides(this.tmpState.query))}
                </div>
                <div>{/*JSON.stringify(this.tmpState.query, null, 2)*/}</div>
                <br />
                <div>{/*JSON.stringify(this.findGuides(this.tmpState.query), null, 2)*/}</div>
            </div>
        )
    }


    getCategories = query => {
        let categories = []
        var i;
        let length = Object.keys(query.activities).length
        
        for(i=0;i<length;i++){
            let cat = query.activities[i].category
            console.log(cat)
            categories.push(...cat)
        }
        return categories
    }
    findGuides = query => {
        let array = [];
        
        let q = this.getCategories(query);
        console.log(q)
        //return guides that have similar categories.
        
        //for each guide, check to see how many categories 
        //the guide has in common with the itinerary
        var i;
        for(i=0;i<20;i++){
            let gCategories = this.state.guidesDB[i].categories;
            var j;
            q.forEach( el =>{
                if(gCategories.includes(el) && !array.includes(this.state.guidesDB[i])){
                    array.push(this.state.guidesDB[i])
                }
            })
            
        }
        return array;
    }

    populateDB = () => {
        for(var i=0; i<20;i++){
            var guide = {
                name: '',
                categories: [],
                rating: 0,
            };
            guide.name = this.db.names[i];
            guide.img = this.state.pictures[i]
            guide.rating = this.db.reviews[i%5];
            guide.numOfRatings = this.randNum(48,148);
            //console.log(guide.rating);

            guide.categories.push(this.db.categories[this.randNum(0,this.db.categories.length)]);
            guide.categories.push(this.db.categories[this.randNum(0,this.db.categories.length)]);
            guide.categories.push(this.db.categories[this.randNum(0,this.db.categories.length)]);
            guide.categories = [...new Set(guide.categories)];
            this.setState()
            this.state.guidesDB.push(guide);
        }
    }

     randNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }


//make guides
    db = {

        reviews: [4.1,4.9,4.5,4.7],
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
            'Other'
        ],
        //pics: [pic1,pic2],
        names: [
            "Abram",
            "PJ",
            "Otis",
            "Hugo",
            "Jett",
            "Gunnar",
            "Ryan",
            "Jerico",
            'Ace',
            "Zooey",
            "Alice",
            "Arwen",
            "Amy",
            "Wren",
            "Sally",
            "Romy",
            "Poppy",
            "Penny",
            "Princess",
            "Lizzie"
        ]
    }
}

export default Results;