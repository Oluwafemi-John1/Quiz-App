import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import mylogo from "../assets/Screenshot 2022-09-10 140609.png"
import logoname from "../assets/Screenshot 2022-09-10 141710.png"


const Signup = () => {
    const Navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.quiz) {
            setGame(JSON.parse(localStorage.getItem("quiz")))
        } else {
            setGame([])
        }
    }, [])

    const [Game, setGame] = useState([])

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
            firstname:"",
            lastname:"",
            email:"",
            password:""
        },

        onSubmit:(values)=> {
            let allGame = Game.push(values)
            setGame(allGame)
            console.log(Game);
            localStorage.setItem("quiz", JSON.stringify(Game))
            Navigate("/signin")
            console.log(values);
        },

        onReset:(values)=> {
            console.log(values);
        },

        validationSchema:yup.object({
            firstname:yup.string().matches(/^[\w]{2,}$/,"Must be at least 2 characters").required("This field is required"),
            lastname:yup.string().matches(/^[\w]{2,}$/,"Must be at least 2 characters").required("This field is required"),
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
					<div className="col-lg-6 bg-light shadow mx-auto px-4 mt-5">
						<h2 className="text-center my-2" style={{color:"#3E0748"}}>Sign Up</h2>
						<form action="" onSubmit={formik.handleSubmit}>
							<input
								type="text"
                                title='Enter you first name'
								className={formik.errors.firstname?"form-control my-2 is-invalid" : "form-control my-2"}
								name="firstname"
								placeholder="First Name"
                                onChange={formik.handleChange}
                                value={formik.values.firstname}
                                onBlur={formik.handleBlur}
							/>
                            {formik.touched.firstname && <small className='text-danger'>{formik.errors.firstname}</small>}
                            <input
								type="text"
                                title='Enter you last name'
                                className={formik.errors.lastname?"form-control my-2 is-invalid" : "form-control my-2"}
								name="lastname"
								placeholder="Last Name"
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                                onBlur={formik.handleBlur}
							/>
                            {formik.touched.lastname && <small className='text-danger'>{formik.errors.lastname}</small>}
                            <input
								type="email"
                                className={formik.errors.email?"form-control my-2 is-invalid" : "form-control my-2"}
								name="email"
								placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
							/>
                            {formik.touched.email && <small className='text-danger'>{formik.errors.email}</small>}
                           <div>
                            <input
                                type="password"
                                className={formik.errors.password?"form-control my-2 is-invalid" : "form-control my-2"}
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur} ref={password}
                            />
                            {formik.touched.password && <small className='text-danger'>{formik.errors.password}</small>}
                            <div id="toggle" ref={toggle} onClick={showHide}><i ref={i} className="fa fa-eye" aria-hidden="true"></i></div>
                           </div>

                            <button className="btn btn-info w-100 my-2 text-light" type='submit' style={{backgroundColor:"#3E0748"}}>Submit</button>
						</form>

                        <div className='my-3'>
                        <button className='btn btn-danger my-2 w-25' type='reset' onClick={formik.handleReset} style={{backgroundColor:"red"}}>Reset</button>
                        <small className='ms-4 fs-6'>Already have an account? <Link className='fw-bold' style={{color:"#3E0748"}} to='/signin'>Sign in</Link></small>
                        </div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup