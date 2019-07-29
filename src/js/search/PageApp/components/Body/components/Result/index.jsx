import React from 'react'
import classNames from 'classnames'

const Result = ({ product }) => {

    return (
        <div
            className={classNames("col-8", "col-sm-6", "col-lg-4", "col-xl-3", "pb-2")}
            role="article"
            aria-label="Product Thumbnail"
        >
            <div className={classNames("card", "thumbnail", "card-body")}>
                <a
                    href={product.url}
                    className={classNames(["thumbnail-image", "pb-2"])}
                >
                    <img
                        src={`/assets/thumb/${product.sku}.jpg`}
                        className={classNames("product-image", "img-fluid")}
                        alt={product.name}
                    />
                </a>
                <p className={classNames("card-title", "h4")}>
                    <a href={product.url}>{product.name}</a>
                </p>
                <p
                    className="price"
                    aria-label={`${product.name} price`}
                >
                    $ {product.price.toFixed(2)}
                </p>
                <a
                    href={product.url}
                    title={`View ${product.name} Buying Options`}
                    className={classNames("btn", "btn-primary", "btn-block", "btn-loads")}
                >
                    See Options
                </a>
            </div>
        </div>
    )
}

export default Result