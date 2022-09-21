import React from "react";

const stateValue={
    name1:"Sakthi Ganesh",
    age:21
}

const Message=()=>{

    const {name1,age}=stateValue;

     return <div>
        <h1>The name is {name1} and age is {age}</h1>
     </div>
}

export default Message;
