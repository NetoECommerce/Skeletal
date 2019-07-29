import React from 'react'

// Sajari Components
import {
    Provider
} from '@sajari/sdk-react'

// Sajari Config
import {
    pipeline,
    createValues
} from './sajari'

// Custom Components
import {
    Header,
    Body
} from './components'

const PageApp = ({ token }) => {

    const values = createValues({ q: token })

    return (
        <Provider search={{ pipeline, values }} searchOnLoad>
            <div className="container">
                <Header/>
                <Body/>
            </div>
        </Provider>
    )
}

export default PageApp