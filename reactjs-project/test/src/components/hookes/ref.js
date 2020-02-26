import React, { Component, createRef } from 'react'

export class Ref extends Component {
      constructor(props) {
            super(props)
            this.inputRef = React.createRef()//this line is common when we use the
      }  
      componentDidMount(){
            // console.log(this.inputRef)
            this.inputRef.current.focus()
      }  
     change = () => {
     alert(this.inputRef.current.value)

      }
      render() {
            return (
                  <div className="ml-5">
                        <input type="text" placeholder="Name" ref={this.inputRef} placeholder="onFocus-using-ref"/>
                        <button className="btn btn-primary" onClick={this.change}>refValue-display-in-alert</button><br/>
                        {/* ref is an reserve keyword */}
                        <input type="text" placeholder="Age"/><br/>
                        <input type="text" placeholder="Place"/>
                  </div>
            )
      }
}

export default Ref
