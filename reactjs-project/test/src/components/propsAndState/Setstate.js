import React, { Component } from 'react'
 

//states managed within the components.
class State extends Component {
      constructor(){
            super()
            this.state = {
            count:0
            }
      }
      
      Change(){
            this.setState({
                  count: this.state.count + 1
            })
      
      }
      Decre(){
            this.setState({
                  count:this.state.count - 1
            })
      }
      Reset(){
            this.setState({
                  count:this.state.count=0 
            })
      }
      
      render() {
           
            return (
                  <div>
                         
                        <h1>count-{this.state.count}</h1>
                        <button className="btn btn-success ml-3" onClick ={ () => this.Change()}>Increment</button>   
                        <button className="btn btn-danger ml-3" onClick ={ () => this.Decre()}>Decrement</button>  
                        <button className="btn btn-info ml-3" onClick ={ () => this.Reset()}>Reset</button>
                        
                  </div>
            )
      }
}

export default State
