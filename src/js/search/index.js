import React from 'react'
import ReactDOM from 'react-dom'
import PageApp from "./PageApp"

var searchParams = new URLSearchParams(window.location.search),
    kw = searchParams.get('kw')

ReactDOM.render(
    <PageApp token={kw} />,
    document.getElementById("search-app-root")
)