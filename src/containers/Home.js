import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Play from "../components/Play"
import "../styles/home.css"
import { increment, decrement } from "../store/reducers/stepCounter";

const Home = props => {
 let data = [{
   title: "Feed the pupper",
   description: "Breakfast at 8am",
   experience: "400"
 },
 {
  title: "Walk Santos",
  description: "Before you go to school, take care of your friend's business",
  experience: "400"
 },
 {
  title: "Play",
  description: "When you get home from school, play frisbee or something outside",
  experience: "400"
 },
 {
  title: "Kennel Training",
  description: "Your friend needs to learn to spend time in the kennel to sleep and to train in stopping bad behavior",
  experience: "400"
   } 
  ]
  return (
    <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center"
      // }}
    >
     <div><h1>4 Paw Certified</h1></div> 
     {data.map((quest,index) => {
       return(
         <Play
         {...quest}
         />
       )

     })}
     {/* <Play/> */}
    
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
