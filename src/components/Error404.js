import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/Error404.css"

const Error404 = () => {
  return (
    <>
        <main>
            <h1>4<span><i className="fa fa-snapchat-ghost"></i></span>4</h1>
            <h2>Error: 404 page not found</h2>
            <p>Oops, the page you're looking for cannot be accessed</p>
            <p>Go back <Link to="/" className="border  p-2 rounded-pill">Home</Link></p>
        </main>
    </>
  )
}

export default Error404