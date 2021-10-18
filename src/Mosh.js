import React from "react"
import ReactDOM from "react-dom"
import HandlingEvents from "./HandlingEvents";

class Mosh extends React.Component {
    //     constructor() {
    //         super()


    //         this.state = {
    //             count: 4,
    //             imageUrl: "https://picsum.photos/200", //this is an image gen site
    //             tags: ["tag1", "tag2", "tag3"]



    //         }

    //     }
    //     formatCount() {
    //         const { count } = this.state;
    //         return count === 0 ? <h1> Zero</h1> : count;
    //     }
    //     render() {

    //         let classes = "border border-"
    //         classes += this.state.count === 0 ? "warning" : "primary";


    //         return (
    //             <div>
    //                 {/* setting atrribute */}
    //                 <img src={this.state.imageUrl} alt="" />


    //                 { /*inside the curly bracces one can add any javascript
    //                 an expression is something that produces a value
    //                 JSX ecpression get compiled to react element
    //                 JSX expression are just like normal javascript object

    //                 can be passed into functions  

    //                 and can also be used as a value of a constant or variable
    //                 */ }

    //                 {/*comment*/}
    //                 <br />
    //                 <br />
    //                 {/* and one can choose to style inline */}
    //                 <h1 style={{ fontSize: 30 }} className={classes} >{this.formatCount()}   </h1>


    //                 <br />
    //                 <button className="btn btn-outline-secondary btn-sm">Increment</button>
    //                 <br />
    //                 <ul>
    //                     {/* how to render a list of item in react */}

    //                     {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}

    //                 </ul>
    //             </div>
    //         )
    //     }
    // }

    // conditional rendering 
    //Since there is no if , if else in react ,
    //we use conditional rendering.

    //     state = {
    //     count: 0,
    //     tags: ["tag1", "tag2"]
    // }

    // renderTags() {

    //     if (this.state.tags.length === 0) return <p>there is nothing here</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }
    // render() {
    //     return (

    //         //another way to render our condition is with the logical and 
    //         //meanwhile it works when there's an empty array or value
    //         //this returns truthy or falsy with the logical AND
    //         //and returns the last value
    //         <div>
    //             {this.state.tags.length === 0 && "please create a new tag!"}

    //             {this.renderTags()}
    //         </div>
    //     )
    // }




    state = {
        count: 0,
        tags: ["tag1", "tag2"]
    }
    handleIncrement() {
        console.log("this increment button was clicked")
    }
    renderTags() {

        if (this.state.tags.length === 0) return <p>there is nothing here</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    render() {
        return (

            //another way to render our condition is with the logical and 
            //meanwhile it works when there's an empty array or value
            //this returns truthy or falsy with the logical AND
            //and returns the last value
            <div>
                {this.state.tags.length === 0 && "please create a new tag!"}
                ,
                {this.renderTags()},

                {/* handling events
                all these REACT elements have property that are based
                on standard DOM events

                and the way to do these is setting a particular 
                attributes  to method defined

                dont forget to pass a reference to the method 
                in the element properties value curly braces
                which was defined

                meanwhile the name of the event properties is 
                case sensentive and uses camel naming convention
                */}
                <button onClick={this.handleIncrement} className="btn btn-outline-secondary btn-sm">Increment</button>
            </div>
        )
    }

}




export default Mosh