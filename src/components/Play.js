import React from "react";
import "../styles/play.css"
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    UncontrolledAlert,
    Button,
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
  import {
   Link
  } from "react-router-dom";
  import { RadioGroup, RadioButton } from 'react-radio-buttons';

export function Certified (props){
    return(
        
        <p>{props.completed}XP</p>
    )
}
function Play (props){

    return(
        
        <div class='outer' style={{display:'flex',  border:'groove' }}>
            <div style ={{display: 'flex'}}>
                <img class='sideimg' src = {props.picture}/></div>
            
                <div class="middle">
                    <p class="topic">{props.title}</p>
                    <p>{props.description}</p>
                
                </div>
            <div class="experience">
                <p  style={{alignItems:'flex-end'}}>{props.experience}XP</p>
            </div>
            <Link to={`/task/${props.type}`}>Task</Link>
        </div>
    )
}

export default Play;