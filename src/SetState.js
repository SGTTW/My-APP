import React from "react";

class SetState extends React.Component {
    constructor() {
        super()
        this.state = {

            count: 0
        }
        this.clicked = this.clicked.bind(this)
       
        
    }
    clicked() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })

    }
   
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clicked}>Change!</button>
              
                {/* <ChildComponent count = {this.state.count}/> */}
            </div>
        )
    }
}
export default SetState
/*Comments*/