import React from 'react'

// Custom components
import {
    Input,
    Meta
} from './components'

const Header = () => {
    return (
        <div className="row">
            <div className="col-12">
                <Input/>
            </div>
            <div className="col-12 text-center">
                <Meta/>
            </div>
        </div>
    )
}

export default Header