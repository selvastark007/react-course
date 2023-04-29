import React from 'react'
import { UserContext } from '../../../App'

const ComponetC = () => {
    return (
        <>
            <UserContext.Consumer>
                {
                    user => {
                        return <div>User Context value {user}</div>
                    }
                }
            </UserContext.Consumer>

        </>
    )
}

export default ComponetC