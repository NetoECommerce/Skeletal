import React from 'react'
import ReactDOM from 'react-dom'
import PageApp from './PageApp'

var searchParams = new URLSearchParams(window.location.search),
    rf = searchParams.get('rf'),
    kw = searchParams.get('kw')

if (rf === "kw" && "kw" !== "") {
    ReactDOM.render(
        <PageApp token={kw}/>,
        document.getElementById("search-app-root")
    )
}