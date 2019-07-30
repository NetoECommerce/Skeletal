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
    Body,
    Footer
} from './page'

const PageApp = ({ token }) => {

    const values = createValues({ q: token })

    return (
        <Provider search={{ pipeline, values }} searchOnLoad>
            <Header />
            <Body />
            <Footer/>
        </Provider>
    )
}

export default PageApp