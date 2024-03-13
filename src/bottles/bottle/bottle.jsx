import { useState } from "react";
import "./bottle.css"

const Bottle = ({bottle,addToCard}) => {
    const {name,price,img}=bottle;
    const [mark,setMark]=useState(false)

    const handleMark=()=>{
        setMark(!mark)
    }

    return (
        <div className={`bottleDiv ${mark && "bg-color"}`}>
            <h3>{name}</h3>
            <img src={img}></img>
            <h5>{price}$</h5>
            <button onClick={handleMark}>{mark ? "marked" : "mark as buy"}</button>
            <br /> <br />
            <button onClick={()=>addToCard(bottle)}>Add to Card</button>
        </div>
    );
};




export default Bottle;