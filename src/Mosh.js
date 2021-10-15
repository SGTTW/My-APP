import React from "react"
import ReactDOM from "react-dom"

class Mosh extends React.Component {
    constructor() {
        super()

        this.state = {


            count: 0,
        imageUrl: "https://picsum.photos/200" //this is an image gen site
        }


    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }

    render() {


        return (
            <div>
                {/* setting atrribute */}
                <img src={this.state.imageUrl} alt="" />
                <span className="badge badge-primary">{this.formatCount()}</span>
                { /*inside the curly bracces one can add any javascript
                an expression is something that produces a value
                JSX ecpression get compiled to react element
                JSX expression are just like normal javascript object

                can be passed into functions  

                and can also be used as a value of a constant or variable
                */ }

                {/*comment*/}
                <br />
                <br />
                <button>Increment</button>

            </div>
        )
    }


}




export default Mosh