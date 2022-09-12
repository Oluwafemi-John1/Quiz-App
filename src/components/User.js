import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import mylogo from "../assets/Screenshot 2022-09-10 140609.png"
import logoname from "../assets/Screenshot 2022-09-10 141710.png"

const User = () => {
    let firstname = JSON.parse(localStorage.login)[2]
    console.log(firstname);
    const navigation = useRef();
    const toggle = useRef();
    const navigate = useNavigate()

    const toggleMenu = () => {
        navigation.current.classList.toggle('active')
        toggle.current.classList.toggle('active')
    }

    const logout = () => {
        localStorage.removeItem("login")
        navigate('/signin')
    }
  return (
    <>
        <nav>
            <div className="nav-wrapper">
            <div id='logo'><Link to="/" className="brand-logo"><img style={{borderRadius:"35px"}} src={mylogo} width={42} alt="" /><img src={logoname} alt="" width={70} /></Link></div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/signup">Register account</Link></li>
                <li><Link to="/signin">Sign in</Link></li>
                <li><Link to="/signin" onClick={logout} className='text-danger'>Log out</Link></li>
            </ul>
            </div>
        </nav>

        <div className="navigation" ref={navigation}>
            <ul>
                <li>
                    <Link to="/">
                    <span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span> 
                    <span className="title">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/user">
                    <span className="icon"><i className="fa fa-user" aria-hidden="true"></i></span> 
                    <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                    <span className="icon"><i className="fa fa-comment" aria-hidden="true"></i></span> 
                    <span className="title">Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                    <span className="icon"><i className="fa fa-question-circle" aria-hidden="true"></i></span> 
                    <span className="title">Help</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                    <span className="icon"><i className="fa fa-cog" aria-hidden="true"></i></span> 
                    <span className="title">Setting</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                    <span className="icon"><i className="fa fa-lock" aria-hidden="true"></i></span> 
                    <span className="title">Password</span>
                    </Link>
                </li>
                <li onClick={logout}>
                    <Link to="/signin">
                    <span className="icon"><i className="fa fa-sign-out" aria-hidden="true"></i></span> 
                    <span className="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="toggle" ref={toggle} onClick={toggleMenu}></div>

        <div className="container border border-warning">
            <h1 className='text-center'>Welcome {firstname}</h1>
        </div>
    </>
  )
}

export default User