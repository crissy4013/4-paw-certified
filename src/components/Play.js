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

function Play (){

    return(
        <div class='outer' style={{display:'flex',  border:'groove' }}>
            <div><p>picture</p></div>
            {/* <img>Picture</img> */}
            <div class="middle">
                <p class="topic">Feed the pupper</p>
                <p>Breakfast is served at 8:15am
                </p>
            </div>
            <div class="experience">
                <p  style={{alignItems:'flex-end'}}>400XP</p>
            </div>
        </div>
    )
}

export default Play;