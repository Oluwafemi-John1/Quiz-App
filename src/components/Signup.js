import { useFormik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import * as yup from 'yup'

const Signup = () => {
    const formik = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            password:""
        },

        onSubmit:(values)=> {
            console.log(values);
        },

        onReset:(values)=> {
            console.log(values);
        },

        validationSchema:yup.object({
            firstname:yup.string().matches(/^[\w]{2,}$/,"Must be at least 2 characters").required("This field is required"),
            lastname:yup.string().matches(/^[\w]{2,}$/,"Must be at least 2 characters").required("This field is required"),
            email:yup.string().email("Must be a valid email").required("This field is required"),
            password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Must include at least 1 uppercase and lowercase letter. Must include a number and should not be less than 8 characters").required("This field is required")
        })
    })

  return (
		<>
			<div className="container-fluid">
				<div className="row mt-5">
					<div className="col-8 shadow mx-auto px-4">
						<h1 className="text-center my-2">Sign Up</h1>
						<form action="" onSubmit={formik.handleSubmit}>
							<input
								type="text"
                                title='Enter you first name'
								className={formik.errors.firstname?"form-control my-2 is-invalid" : "form-control my-2 is-valid"}
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
                                className={formik.errors.lastname?"form-control my-2 is-invalid" : "form-control my-2 is-valid"}
								name="lastname"
								placeholder="Last Name"
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                                onBlur={formik.handleBlur}
							/>
                            {formik.touched.lastname && <small className='text-danger'>{formik.errors.lastname}</small>}
                            <input
								type="email"
                                className={formik.errors.email?"form-control my-2 is-invalid" : "form-control my-2 is-valid"}
								name="email"
								placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
							/>
                            {formik.touched.email && <small className='text-danger'>{formik.errors.email}</small>}
                            <input
								type="password"
                                className={formik.errors.password?"form-control my-2 is-invalid" : "form-control my-2 is-valid"}
								name="password"
								placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
							/>
                            {formik.touched.password && <small className='text-danger'>{formik.errors.password}</small>}
                            <button className="btn btn-info w-100 my-2" type='submit'>Submit</button>
						</form>
                        <button className='btn btn-danger my-2 w-25' type='reset' onClick={formik.handleReset}>Reset</button>

                        <small className='ms-4'>Already have an account? Sign in <Link to='/'>here</Link></small>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup