// Code SimplerComponent Here
import React from  'react'
import SimpleComponent from './SimpleComponent'

function SimplerComponent(props) {
    
    return (<div onClick={props.handleClick} ><h1>I am just happy</h1></div>)
}


export default SimplerComponent