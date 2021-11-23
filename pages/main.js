import { useState } from "react";

export default function Main(){
let [name1, setName1] = useState("");
let [name2, setName2] = useState("");
let [percentage, setPercentage] = useState(0);

const calculatepercentage = () => {
    setPercentage(name1.length + name2.length/100);
}

    return(
        <div className="container">
            <div className="row">
            <img  src="https://img.icons8.com/bubbles/100/000000/like.png"/>
            {percentage!=0 && <p>{percentage}%</p>}  
            </div>
            <div className="inputs">
                <input type="text" placeholder="Enter name1" onChange={(event)=> setName1(event.target.value)}/>
                <input type="text" placeholder="Enter name2" onChange={(event)=> setName2(event.target.value)}/><br />
            </div>
            <button onClick = {calculatepercentage}>Calculate</button>
        </div>
    );
}