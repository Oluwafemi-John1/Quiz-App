import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import mylogo from "../assets/mylogo.svg"

const Dashboard = () => {
    const navigation = useRef();
    const toggle = useRef();

    const toggleMenu = () => {
        navigation.current.classList.toggle('active')
        toggle.current.classList.toggle('active')
    }
  return (
    <>
        <nav>
            <div className="nav-wrapper">
            <div id='logo'><Link to="/" className="brand-logo"><img src={mylogo} width={40} alt="" /></Link></div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/signup">Register account</Link></li>
                <li><Link to="/signin">Sign in</Link></li>
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
                    <Link to="/">
                    <span className="icon"><i className="fa fa-user" aria-hidden="true"></i></span> 
                    <span className="title">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <span className="icon"><i className="fa fa-comment" aria-hidden="true"></i></span> 
                    <span className="title">Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <span className="icon"><i className="fa fa-question-circle" aria-hidden="true"></i></span> 
                    <span className="title">Help</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <span className="icon"><i className="fa fa-cog" aria-hidden="true"></i></span> 
                    <span className="title">Setting</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <span className="icon"><i className="fa fa-lock" aria-hidden="true"></i></span> 
                    <span className="title">Password</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <span className="icon"><i className="fa fa-sign-out" aria-hidden="true"></i></span> 
                    <span className="title">Sign Out</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="toggle" ref={toggle} onClick={toggleMenu}></div>
    </>
  )
}

export default Dashboard