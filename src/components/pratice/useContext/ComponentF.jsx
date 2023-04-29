import React from 'react';
import { UserContext } from '../../../App'

const ComponentF = () => {
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

export default ComponentF