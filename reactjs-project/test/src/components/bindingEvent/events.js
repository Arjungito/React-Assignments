import React, { Component } from 'react'

class Events extends Component {
      constructor(props) {
            super(props)
            // in react eventhandler, 'this' is undefined so that's the reason we use bind.
            this.Change = this.Change.bind(this)
      
            this.state = {
                   message:"welcome Arjun"
            }
      }
      Change(){
            this.setState({
                  message:"Bye Arjun!"
            })
            console.log(this)}
      
      render() {
            return (
                  <div> 
                         {/* 3 types of binding, first two methods are performance issues in big projects */}
                        <h6 className="ff">{this.state.message}</h6>
                        <button onClick = {this.Change.bind(this)}>Change</button>
                        <button onClick = {()=>this.Change()}>Change</button>
                        <button className ="fd" onClick = {this.Change}>Change</button>

                  </div>
            )
      }
}

export default Events
