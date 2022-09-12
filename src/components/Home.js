import React from 'react'
import { Link } from 'react-router-dom'
import mylogo from "../assets/Screenshot 2022-09-10 140609.png"
import logoname from "../assets/Screenshot 2022-09-10 141710.png"

const Home = () => {
  return (
    <>
        <nav>
            <div className="nav-wrapper">
            <div id='logo'><Link to="/" className="brand-logo"><img style={{borderRadius:"35px"}} src={mylogo} width={42} alt="" /><img src={logoname} alt="" width={70} /></Link></div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/signup">Register account</Link></li>
                <li><Link to="/signin">Sign in</Link></li>
            </ul>
            </div>
        </nav>

        <section className='container-fluid'>
            <div className="row">
                <div className='mt-5' align="center">
                    <img style={{borderRadius:"200px"}} id="biglogo" className="" width={400} src={mylogo} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Home