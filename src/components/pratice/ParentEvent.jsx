import React, { Component } from 'react'
import ChildComponet from './ChildComponet'

export class ParentEvent extends Component {

     

    constructor(props) {
      super(props)
    
      this.state = {
       parentName : 'rajan'
      }
      this.greetParent = this.greetParent.bind(this)
    }
     
    greetParent (child,array){
        alert(`hello ${this.state.parentName} from ${child} array ${array.map(x => x*6)}`)
    }
  render() {
    return (
      <>
      <ChildComponet greetComponet={this.greetParent}/>
      </>
    )
  }
}

export default ParentEvent