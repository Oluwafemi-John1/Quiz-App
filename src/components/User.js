import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import mylogo from "../assets/Screenshot 2022-09-10 140609.png"
import logoname from "../assets/Screenshot 2022-09-10 141710.png"
import profilePic from "../assets/blank-profile-picture-973460__340.webp"

const User = () => {
    let firstname = JSON.parse(localStorage.login)[0].email
    // console.log(firstname);
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

    let date = new Date();
    let dateCreated = date.toLocaleDateString();
    let timeCreated = date.toLocaleTimeString();
  return (
    <>
        <nav>
            <div className="nav-wrapper">
            <div id='logo'><Link to="/" className="brand-logo"><img style={{borderRadius:"35px"}} src={mylogo} width={42} alt="" /><img src={logoname} alt="" width={70} /></Link></div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/signin" onClick={logout} className='text-danger fw-bold'>Log out</Link></li>
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

        <div className="col-lg-5 mx-auto mt-lg-4 rounded-5">
            <p className='text-center'><img src={profilePic} width={100} style={{borderRadius:"95px"}} alt="" /></p>
            <p className='text-center text-warning'>Welcome {firstname}</p>
            <p className='text-center text-warning'>Today's Date: {dateCreated}</p>
            <p className='text-center text-warning'>Login Time: {timeCreated}</p>

        </div>

        <div className="container mt-2" >
            <div className="container-fluid mt-lg-5">
                <div className="row mx-auto my-2">
                    <div className="col-lg border border-light mx-lg-3 text-light rounded-5 my-2" id='containers'>
                        <Link to="/user" className='text-light'>
                            <h6 className='text-center'>Take a Quiz</h6>
                            <p className='text-center fs-2'>Random Question</p>
                            <center><small>Dare to dream</small></center>
                        </Link>
                    </div>
                    <div className="col-lg border border-light mx-lg-3 text-light rounded-5 my-2" id='containers'>
                        <Link to="/user" className='text-light'>
                            <h6 className='text-center'>Take a Daily Trivia</h6>
                            <p className='text-center fs-2'>Question of the Day</p>
                            <center><small>Test your knowledge</small></center>
                        </Link>
                    </div>
                    <div className="col-lg border border-light mx-lg-3 text-light rounded-5 my-2" id='containers'>
                        <Link to="/user" className='text-light'>
                            <h6 className='text-center'>Take your Knowledge</h6>
                            <p className='text-center fs-2'>Answer Questions</p>
                            <center><small>Dare to dream</small></center>
                        </Link>
                    </div>
                </div>

                <div className="row my-2 justify-content-center">
                    <div className="col-lg-4 border border-light mx-lg-3 text-light rounded-5 my-2" id='containers'>
                        <Link to="/user" className='text-light'>
                            <h6 className='text-center'>Check your Progress</h6>
                            <p className='text-center fs-1'>Score</p>
                            <center><small>Dare to dream</small></center>
                        </Link>
                    </div>
                    <div className="col-lg-4 border border-light mx-lg-3 text-light rounded-5 my-2" id='containers'>
                        <Link to="/user" className='text-light'>
                            <h6 className='text-center'>Be an Admin</h6>
                            <p className='text-center fs-2'>Create your Quiz</p>
                            <center><small>Be a boss</small></center>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default User