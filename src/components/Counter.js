import React, { useState } from "react";
function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    );
}
export default Counter;