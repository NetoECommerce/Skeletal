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
                        styles={{
                            container: {
                                marginRight: 15,
                                marginLeft: 15,
                                display: 'grid',
                                gridGap: 15,
                                '@media (min-width: 576px)': {
                                    gridTemplateColumns: '100%'
                                },
                                '@media (min-width: 768px)': {
                                    gridTemplateColumns: '100%'
                                },
                                '@media (min-width: 992px)': {
                                    gridTemplateColumns: 'repeat(2, 1fr)'
                                },
                                '@media (min-width: 1200px)': {
                                    gridTemplateColumns: 'repeat(4, 1fr)'
                                }
                            }
                        }}
                        ResultRenderer={({ values, resultClicked }) => (
                            <Result product={values} onClick={resultClicked} />
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Body

