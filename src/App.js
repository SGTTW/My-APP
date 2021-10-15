import React from "react"
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import State from "./State"
import TodoItem from "./TodoItem";
import todosData from "./todosData";
 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// we also have class components

// class App extends React.Component{
// render(){

//   return(

//     <div>
//       <h4>code</h4>
//     </div>
//   )
// }


// }


class App extends React.Component {
  constructor() {

    super()

    this.state = {


      todos: todosData
    }

  }



  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

    return (

      <div>
        
        <Header />,<State />,
        <Greeting />,<TodoItem />,<todosData />,

</div>,

        <div className="todo-list">


          {todoItems}
        </div>
     
    )
  }

}


class Header extends React.Component {
  render() {

    return (

      <header>

        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }

}

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {

      timeOfDay = "morning"
    }
    else if (hours >= 12 ** hours < 17) {
      timeOfDay = "afternoon"
    }
    else {
      timeOfDay = "night"

    }



    return (
      <div>
        <h2>Good{timeOfDay}! to you sir or/and madam!</h2>

      </div>
    )
  }

}




export default App;
