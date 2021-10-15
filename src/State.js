//understanding state 
//state is simply the  the data that the component maintains
//it can change it's value
//props are immutable i.e one cannot change value but "state" can
//the component must be a class based component
//and add a constructor method
// a constructor method is a place where one would be initializing some values
//the first thing to do is to make a function call called super
//which goes to the parent class i.e React.Component or super class
//grabs some goodies and initialize it to the class State component one is working on

//one other thing to do is to add a property "this.state"
//state will always be an object

import React from "react";

// class  State extends React.Component{
// constructor(){

//     super()


//     this.state = {
//         answer:"yes"

//       }
// }     

// render(){ 
//     return(


//         <h1>this is a state component. {this.state.answer} </h1>
//     )
// }}





// class State extends React.Component {


//     constructor() {


//         super()
//         this.state = {
//             name: "sg",
//             age: 27
//         }
//     }
//     render() {
//         return (


//             <div>


//                 <h1>My name is : {this.state.name}</h1>,
//                 <h3>And I am : {this.state.age}</h3>
//             </div>
//         )



//     }
// }


//just playing around with some practices
//Lord Jesus I thank you so much for everything you've done for me..
//logging in and out practice
//Repetition is really good for muscle memory and getting the syntax down

// class State extends React.Component {


//     constructor() {


//         super()

//         this.state = {
//             LoggedIn: false



//         }
//     }

//     render() {
//         let CurrentState
//         if (this.state.LoggedIn === true) {

//             CurrentState = 'in'

//         } else {

//             CurrentState = "out"
//         }

//         return (

//             <div>

//                 <h1>You are currently Logged  {CurrentState} </h1>
//             </div>
//         )
//     }


// }













class State extends React.Component {
    constructor() {
        super()
        this.state = {
            LoggedIn: true
        }
    }
    render() {
        let CurrentState
        if (this.state.LoggedIn) {
            CurrentState = "in"
        } else {
            CurrentState = "out"

        }
        return (
            <div>
                <h3>You are currently Logged  {CurrentState} </h3>
            </div>
        )
    }
}





















export default State