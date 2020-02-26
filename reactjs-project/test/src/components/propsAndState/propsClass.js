import React, { Component } from 'react'

//props are used to change data from parent component to child component
class Props extends Component {
      render() {
            return (
                  <div>
                       <h3>where are you {this.props.name}</h3>
                       
                  </div>
            )
      }
}

export default Props
