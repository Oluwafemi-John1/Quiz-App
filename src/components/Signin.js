import { useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import mylogo from "../assets/Screenshot 2022-09-10 140609.png"
import logoname from "../assets/Screenshot 2022-09-10 141710.png"

const Signin = () => {
    let receive = JSON.parse(localStorage.getItem("quiz"));
    const navigate = useNavigate();
    const [userLogin, setuserLogin] = useState([]);
    const [message, setmessage] = useState("");
    const toggle = useRef();
    const i = useRef();
    const password = useRef();

    const showHide = () => {
        if (password.current.type === 'password') {
            password.current.setAttribute('type','text');
            toggle.current.classList.add('hide');
            i.current.classList = "fa fa-eye-slash"
        }
        else {
            password.current.setAttribute('type', 'password')
            i.current.classList = "fa fa-eye"
            toggle.current.classList.remove('hide')
        }
    }

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },

        onSubmit:(values)=> {
            // console.log(values);
           receive.find((items) => {
                if (items.email === values.email && items.password === values.password) {
                    if (values.email !== "" && values.password !== "") {
                        setuserLogin(userLogin.push(values))
                        localStorage.login = JSON.stringify(userLogin)
                        // console.log(localStorage.login);
                        navigate("/user")
                    } else {
                        setmessage("Invalid login details")
                    }
                } else {
                    setmessage("Invalid login details")
                }
            })
        },

        onReset:(values)=> {
            console.log(values);
        },

        validationSchema:yup.object({
            email:yup.string().email("Must be a valid email").required("This field is required"),
            password:yup.string().matches(lower,"Must include lowercase letter").matches(upper,"Must include uppercase letter").matches(number,"Must include a number").matches(length,"Must not be less than 8 characters").required("This field is required")
        })
    })

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

        <div className="container-fluid">
			<div className="row mt-5">
				<div className="col-lg-6 col-sm-10 shadow mx-auto px-4 bg-light mt-5">
					<h2 className="text-center my-2" style={{color:"#3E0748"}}>Sign In</h2>
					<form action="" onSubmit={formik.handleSubmit}>
                        <input
						    type="email"
                            className={formik.errors.email?"my-2 is-invalid" : "form-control my-2"}
							name="email"
							placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
						/>
                        {formik.touched.email && <small className='text-danger'>{formik.errors.email}</small>}
                        <input
							type="password"
                            className={formik.errors.password?"my-2 is-invalid" : "form-control my-2"}
							name="password"
							placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
						/>
                        {formik.touched.password && <small className='text-danger'>{formik.errors.password}</small>}
                        <div className='text-danger text-center'>{message}</div>
                        <div id="toggle" ref={toggle} onClick={showHide}><i ref={i} className="fa fa-eye" aria-hidden="true"></i></div>
                        <button style={{backgroundColor:"#3E0748"}} className="btn text-light w-100 my-2" type='submit'>Submit</button>
					</form>

                    <div className='my-3'>
                    <button className='btn btn-danger my-2 w-25' style={{backgroundColor:"red"}} type='reset' onClick={formik.handleReset}>Reset</button>
                    <small className='ms-4 fs-6'>New to <img src={mylogo} width={30} alt="" /><b>?,</b>&nbsp;<Link to='/signup' className='fw-bold' style={{color:"#3E0748"}} >Sign up</Link></small>
                    </div>
                    <marquee className='text-center'><small>Please reload this page if you are having any trouble logging in</small></marquee>
				</div>
			</div>
		</div>
    </>
  )
}

export default Signin