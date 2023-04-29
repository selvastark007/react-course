import React, { Component } from 'react'

class FormHandler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            address: '',
            select: ''
        }
        this.userHandelChange = event => {
            this.setState({
                username: event.target.value
            })
        }
        this.userHandelChangeAddress = event => {
            this.setState({
                address: event.target.value
            })
        }
        this.userHandelChangeSelect = event => {
            this.setState({
                select: event.target.value
            })
        }

        this.handleSubmit = event => {
            alert(` my name is ${this.state.username}.I am from ${this.state.address}.I am know ${this.state.select}`);
            event.preventDefault()


        }

    }
    render() {

        // deStuture
        const { username, address, select } = this.state

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">
                            userName
                        </label>
                        <input type="text" value={username} onChange={this.userHandelChange} />
                    </div>
                    <div>
                        <label htmlFor="">
                            address
                        </label>
                        <input type="text" value={address} onChange={this.userHandelChangeAddress} />
                    </div>

                    <div>
                        <label htmlFor="">
                            Language
                        </label>
                        <select type="text" value={select} onChange={this.userHandelChangeSelect} >
                            <option value="react">react</option>
                            <option value="angular">Angular</option>
                            <option value="vue">vue</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default FormHandler