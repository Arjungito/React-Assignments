import React, {useState} from 'react'

function HookesObject() {
      const [Name,setName] = useState({firstName:"",lastName:""});
      return (
            <div>
                  
                  <input type="text" value={Name.firstName} placeholder="hookes object"
                  onChange={ (e) => setName({...Name,firstName:e.target.value})}/> 
                  <span>{Name.firstName}</span>
                  {/* here ...Name copy every property in 'Name' and override 'firstName'. */}
                  <br/>
                  
                  <input type="text" value={Name.lastName} placeholder="hookes object"
                  onChange= {(e) =>setName({ ...Name,lastName:e.target.value})}/> 
                  <span>{Name.lastName}</span>
                  <h1>{JSON.stringify(Name)}</h1>
            </div>
      )
}

export default HookesObject
