import React, { Component } from 'react'

class Routerparameter extends Component {
       constructor(props) {
             super(props)
       
             this.state = {
                    id:null
             }
       }
      componentDidMount(){
            console.log("params",this.props);
            let id = this.props.match.params.post_id;
            this.setState({
                  id:id
            })
            
      }
      render() {
            return (
                  <div>
                        <h3>{this.state.id}</h3>
                  </div>
            )
      }
}

export default Routerparameter
