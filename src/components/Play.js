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

function Play (props){

    return(
        <div class='outer' style={{display:'flex',  border:'groove' }}>
            <div><p>picture</p></div>
            {/* <img>Picture</img> */}
            <div class="middle">
                <p class="topic">{props.title}</p>
                <p>{props.description}
                </p>
            </div>
            <div class="experience">
                <p  style={{alignItems:'flex-end'}}>{props.experience}XP</p>
            </div>
        </div>
    )
}

export default Play;