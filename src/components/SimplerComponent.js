// Code SimplerComponent Here
import React from  'react'
import SimpleComponent from './SimpleComponent'

function SimplerComponent(props) {
    
    return (<div onClick={props.handleClick} >I am just happy</div>)
}


export default SimplerComponent