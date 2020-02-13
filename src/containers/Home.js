import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Play, { Certified } from "../components/Play"
import "../styles/home.css"
import { increment, decrement } from "../store/reducers/stepCounter";
const Santos = require('../assets/Santos.jpg');
const Exercise2 = require('../assets/exercise2.png')
const Playtime = require('../assets/playtime.png')
const Kennel1 = require('../assets/kennel1.png')
const Award1 = require('../assets/award1.png')
const Achievement1 = require('../assets/achievement1.png')
const Award4 = require('../assets/award4.png')


const Home = props => {
 let data = [{
   picture: Santos,
   title: "Feed the pupper",
   description: "Breakfast at 8am",
   experience: "400"
 },
 {
  picture: Exercise2,
  title: "Walk Santos",
  description: "Before you go to school, take care of your friend's business",
  experience: "400"
 },
 {
  picture: Playtime,
  title: "Play",
  description: "When you get home from school, play frisbee or something outside",
  experience: "400"
 },
 {
  picture: Kennel1,
  title: "Kennel Training",
  description: "Your friend needs to learn to spend time in the kennel to sleep and to train in stopping bad behavior",
  experience: "400"
   } 
  ]
  return (
   <div>
     <h1>4 Paw Certified</h1> 
     
    <div style={{
      display:'flex'
    }}>
      <p style={{alignItems:'flex-end'}} class='won'>3</p>
      <img class='win' src={Award1}/>
      <p style={{alignItems:'flex-end'}} class='won'>2</p>
      <img class='win' src={Award4}/>
      <p style={{alignItems:'flex-end'}} class='won'>6</p>
      <img class='win' src={Achievement1}/>
      <Certified completed={"2400/5000"} />
    </div>
     
     <h1>Upcoming Jobs</h1>
   
     {data.map((quest,index) => {
       return(
         
         <Play
         {...quest}
         />
       )

     })}
    
 
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stepCounter: state.stepCounter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: () => increment(),
      decrement: () => decrement()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
