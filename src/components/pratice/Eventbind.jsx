import React, { Component } from 'react'

 class Eventbind extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
       msg : 'hello everyone'
   }
 }
 click(){
    this.setState({
        msg:'selvva'
    })
    // console.log(this);
 }

  render() {
    return (
      <>
      <h1>{this.state.msg}</h1>
      {/* <button onClick={this.click.bind(this,'selva')}>click</button> */}
      {/* <button onClick={()=>{this.click('selva')}}>click</button> */}
      {/* <button onClick={this.click()}>click</button> */}
      </>
    )
  }
}

export default Eventbind