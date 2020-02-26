import React from 'react'

//props is an object which describe the attributes 
const Fn = (props) => {
      console.log(props);
      
      return <div>
            <h4>{props.place}</h4>

      </div>
}
export default Fn