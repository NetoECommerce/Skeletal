import React from 'react'
import classNames from 'classnames'

const Result = ({ product, onClick }) => (
    <div
        role="article"
        aria-label="Product Thumbnail"
    >
        <div className={classNames("card", "thumbnail", "card-body")}>
            <a
                onClick={onClick}
                className={classNames(["thumbnail-image", "pb-2"])}
            >
                <img
                    src={product.image ? product.image : "//cdn.neto.com.au/assets/neto-cdn/images/default_product.gif"}
                    className={classNames("product-image", "img-fluid")}
                    alt={product.name}
                />
            </a>
            <p className={classNames("card-title", "h4")}>
                <a onClick={onClick}>{product.name}</a>
            </p>
            <p
                className="price"
                aria-label={`${product.name} price`}
            >
                $ {product.defaultPrice}
            </p>
            <a
                onClick={onClick}
                title={`View ${product.name} Buying Options`}
                className={classNames("btn", "btn-primary", "btn-block", "btn-loads")}
            >
                See Options
                </a>
        </div>
    </div>
)

export default Result