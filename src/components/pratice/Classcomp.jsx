import React,{Component} from 'react'

class Classcomp extends Component{

    constructor(){
        super();
        this.state = {
            message : 'hello every One'
        }
    }
        msgChange(){
            this.setState ({
                message : 'Thanking you Subcribe'
            })
        }
   render()
    {
        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.msgChange()}>Subcribe</button>
            </>
        )
    }
   
}

export default Classcomp