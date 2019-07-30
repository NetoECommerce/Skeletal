import React from 'react'

// Sajari Components
import {
    Summary
} from '@sajari/sdk-react'

const SummaryRenderer = ({ totalResults, query }) => {
    return (
        <p>
            {totalResults} Products found for "{query}"
        </p>
    )
}

const Meta = () => {
    return <Summary
        SummaryRenderer={SummaryRenderer}
    />
}

export default Meta