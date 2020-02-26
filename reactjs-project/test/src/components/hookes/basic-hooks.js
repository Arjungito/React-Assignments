import React, {useState} from 'react'//we should import useState 

function BasicHooks() {
      const [count , setCount] = useState(12)
      //here using useState to accepts intial value of state. 
      //here count is the state variable name. count = 12;
      //setCount is the method which changes the value of count.
      return (
            <div>
                 <button class="btn text-center" 
                 onClick={() => setCount(count+100)}><h1>{count}</h1></button> 
            </div>
      )
}

export default BasicHooks
