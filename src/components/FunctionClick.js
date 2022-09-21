import React from 'react';

function Clicking() {

  function sayHello() {
  alert("ALert");
  }
  
  return (
    <button onClick={sayHello}> Click me!</button>
  );
}

export default Clicking;