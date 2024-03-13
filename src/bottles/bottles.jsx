import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./bottle/bottle";
import "./bottles.css"



const Bottles = () => {

// use state for bottles
const [bottles,setBottles]=useState([])

useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setBottles(data))

},[])
// //////

// use state for add bottle in card
const [addBottle,setBottleInCard]=useState([])




// card handle function
const addToCard=(bottle)=>{
setBottleInCard([...addBottle,bottle])
}


    return (
        <div>
            <h3>bottles: {bottles.length}</h3>
<div style={{display:"flex",gap:"70px"}}>


<div className="bottles">
{
    bottles.map((bottle,index)=><Bottle key={index} bottle={bottle} addToCard={addToCard}/>)
}
</div>


<div style={{}}>
    <h3>Card added: {addBottle.length}</h3>
    
<div>

<h4 style={{border:"2px solid black"}}><span style={{marginRight:"20px"}}>Name</span> <span>Price</span></h4>
<div>
{
    addBottle.map((aBottle,index)=><h4 key={index}><span style={{marginRight:"20px"}}>name</span> <span>{aBottle.price}</span></h4>)
}
</div>


</div>


</div>


</div>

        </div>
    );
};

export default Bottles;