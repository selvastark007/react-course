import React, { Component } from 'react'

export class UserGreetings extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : false
      }
    }
  render() {

    let msg 
    if(this.state.isLoggedin){
        return(
            msg = <div>welcome selva</div>
        )
    }else{
        return(
            msg = <div>welcome guest</div>
        )
    }
    // if(this.state.isLoggedin){
    //     return(
    //         <h1>welcome Selva</h1>
    //     )
    // }else{
    //     return(
    //         <h1>welcome guest</h1>
    //     )
    // }
    return (
      <>
      <h1>{msg}</h1>
      </>
    )
  }
}

export default UserGreetings