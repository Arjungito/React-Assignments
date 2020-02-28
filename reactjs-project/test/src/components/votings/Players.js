 import React, { Component } from 'react'
   
  class Players extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         voter:props.votes
      }
    }
    increment = () => { 
      this.setState({
        voter : this.state.voter + 1
      })
    }

   render()   
  { 
    
   return (
     
    <div className="item ">
        <div>
        <img className="ui medium circular image ml-5" src={this.props.imageUrl} alt={this.props.name} />
      </div>

      <div className="middle aligned content">
        <div className="description">
          <a>
          <span>votes</span><i onClick = {this.increment}  className="large caret up icon"/>
            
           {this.state.voter}
          </a>
          <p className="pl-5 ml-2">{this.props.name}</p>
        </div>
        
      </div>
    </div>
    
   )
   
  }
}
  
  
  
 

 

export default Players;
