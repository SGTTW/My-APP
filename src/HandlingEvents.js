import React from "react";




//Events handling is is allowing a user to interact with a webpages
//and do something specific when an events happen
//https://reactjs.org/docs/events.html#supported-events

function handleClick() {

    console.log("this button was clicked")
}

function HandlingEvents() {

    return (

        <div>
            <img onMouseOver={() => console.log("hovered!")}

                src="https://www.fillmurray.com/200/100" />,
          
            <br />,
            <br />,
            <button onClick={handleClick}>Click me </button>
        </div>
    )


}

export default HandlingEvents
