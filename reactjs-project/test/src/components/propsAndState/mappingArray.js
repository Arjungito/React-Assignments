import React, { Component } from 'react'
import Mapp from'../propsAndState/map.json'//here Mapp holds the json data's, Mapp is an random name

class MappingArray extends Component {
      render() {
            return (
                  <div>
                  <div className="container mt-5">
                       <div className="row">
                              {Mapp.map((data, id)=>
                              <div className="col-md-4">
                              <img src = {require("../images/"+data.image) } alt="image"/>
                              <p key={id}>{data.id} {data.color} <span className ="headg">{data.size}</span></p>
                              {console.log(data.image)}
                              </div>
                              )}
                        </div>
                  </div>
                  </div>
            )
      }
}

export default MappingArray
