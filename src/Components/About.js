import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        <div className="header">
            <div className="row1">
                <h1>A room without books is like<br/> a body without a soul</h1>
            </div>
            <div className="row2-">
                <h2>About</h2>
                <nav>
                    <Link id="link1-" to="/" >Home</Link>
                    <Link id="link2-" to="/about">About</Link>
                </nav>
                <h3>My name is Aditya Pradhan, and I created this book   <br/>searching website using React JS and Google Books API. <br/> This page adds routing to the website ! </h3>
            </div>
        </div>
    </>
  )
}

export default About
