import React from "react";
import "../styles/food.css"

export function Certified (props){
    return(
        
        <p>{props.completed}XP</p>
    )
}
function Food (props){

    return(
        
        <div class='outer' style={{display:'flex',  border:'groove' }}>
            <div  style ={{
                display: 'flex',

            }}>
                <img class='sideimg' src = {props.picture}/></div>
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

export default Food;