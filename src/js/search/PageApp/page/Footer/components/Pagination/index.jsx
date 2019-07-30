import React from 'react'

// Utils
import classNames from 'classnames'

// Sajari components
import { Paginator } from '@sajari/sdk-react'

const PageButton = ({ pageNumber, onClick, isCurrent }) => (
    <div className={classNames("page-item", { ['active']: isCurrent })}>
        <a
            onClick={onClick}
            className="page-link"
            aria-label={
                isCurrent
                    ? `Current page`
                    : `Go to page ${pageNumber}`
            }
        >
            {pageNumber}
        </a>
    </div>
)

const Pagination = () => (
    <Paginator
        PageNumberRenderer={PageButton}
    />
)

export default Pagination