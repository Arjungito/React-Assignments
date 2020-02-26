import React, { Component } from 'react'
import Class from '../component-types/class';
import Greet from '../component-types/function';
import Arrow from '../component-types/arrowfn';
import Props from '../propsAndState/propsClass';
import Fn from '../propsAndState/propsFn';
import State from '../propsAndState/Setstate';
import MappingArray from '../propsAndState/mappingArray';
import Events from '../bindingEvent/events';
import BasicHooks from '../hookes/basic-hooks';
import HookesObject from '../hookes/hookesObject';
import Ref from '../hookes/ref';
export class MyProjects extends Component {
      render() {
            return (
                  <div>
                        <MappingArray/>
                        <State/>
                        <BasicHooks/>
                        <HookesObject/>
                        <Ref/>
                        <Class></Class>
                        <Greet></Greet>
                        <Arrow></Arrow>
                        <Props name="Jhon Doe"></Props>
                        <Fn place = "England" postal = '212323' gender="male"></Fn>
                        <Events></Events>
                  </div>
            )
      }
}

export default MyProjects
