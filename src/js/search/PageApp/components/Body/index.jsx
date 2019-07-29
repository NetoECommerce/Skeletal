import React from 'react'

// Sajari components
import {
    Results
} from '@sajari/sdk-react'

// Custom components
import {
    Result
} from './components'

const Body = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <Results
                        ResultRenderer={({ values }) => <Result product={values} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Body

