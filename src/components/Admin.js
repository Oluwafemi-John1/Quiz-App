import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import mylogo from "../assets/Screenshot 2022-09-10 140609.png";
import logoname from "../assets/Screenshot 2022-09-10 141710.png";
import profilePic from "../assets/blank-profile-picture-973460__340.webp"


const Admin = () => {
    const [allUser, setallUser] = useState([]);
    const [currentuser, setcurrentuser] = useState("");
    const [currentuserdetails, setcurrentuserdetails] = useState({});
    const [customer, setcustomer] = useState({});
    // const [Error, setError] = useState("");
    const [admin, setadmin] = useState([]);
    const navigate = useNavigate();

    let firstname = JSON.parse(localStorage.users).firstname

    useEffect (() => {
        if (localStorage.quiz && localStorage.signinEmail && localStorage.users) {
            let AllUser = JSON.parse(localStorage.quiz);
            setallUser(JSON.parse(localStorage.quiz));
            setcurrentuser(JSON.parse(localStorage.signinEmail));
            setcurrentuserdetails(JSON.parse(localStorage.users));
            let email = JSON.parse(localStorage.quiz).email;
            let index = JSON.parse(localStorage.quiz).findIndex(
                (x) => x.email === email
            );
            setcustomer(AllUser[index]);
        } else {
            navigate("/signin");
        }
        if (localStorage.admin) {
            let detail = JSON.parse(localStorage.admin);
            setadmin(detail)
        } else {
            setadmin([]);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            question: "",
            option1: "",
            option2: "",
            option3: "",
            answer: ""
        },
        onSubmit: (values) => {
            let email = currentuserdetails.email;
            let user = allUser;
            let index = user.findIndex((x) => x.email === email);
            let remain = parseInt(user[index].account) + Number(1);
            setallUser((user[index].account = remain));
            localStorage.setItem("quiz", JSON.stringify(allUser));
            const newobj = [...admin, values];
            setadmin(newobj);
            localStorage.setItem("admin", JSON.stringify(newobj));
        },

        onReset: (values) => {
            console.log(values);
        },

        validationSchema: yup.object({
            question: yup.string().required("This field is required"),
            option1: yup.string().required("This field is required"),
            option2: yup.string().required("This field is required"),
            option3: yup.string().required("This field is required"),
            answer: yup.string().required("This field is required")
          }),
    })

  return (
		<>
			<nav>
				<div className="nav-wrapper">
					<div id="logo">
						<Link to="/" className="brand-logo">
							<img
								style={{ borderRadius: "35px" }}
								src={mylogo}
								width={42}
								alt=""
							/>
							<img src={logoname} alt="" width={70} />
						</Link>
					</div>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li className="text-uppercase">
							<img
								src={profilePic}
								width={20}
								style={{ borderRadius: "20px" }}
								alt=""
							/>
							&nbsp;{firstname}
						</li>
					</ul>
				</div>
			</nav>
            <div className='mt-3 col-lg-2 p-2 mx-2 text-center border-3 rounded'>
				<Link to="/user" className="text-danger fw-bold">⏪&nbsp;Back to dashboard</Link>
		    </div>

			<div className="container text-light p-5">
				<div className="row my-2">
					<h3 className="text-center">SET QUESTIONS</h3>

					<div className="row">
						<div className="">
							<center>
								<h6 className="text-warning mb-5">
									Click the button below to create your own questions.😊
								</h6>
								<button type="button" data-bs-toggle="modal" data-bs-target="#money" className="btn btn-success bg-success rounded-2">
                                    <i className="fa fa-plus-circle"></i>&nbsp;
									<span>Set Questions</span>
								</button>
							</center>

							<div className="modal fade bg-success" tabIndex="-1" aria-hidden="true" id="money">
								<div className="modal-dialog">
									<div className="modal-content">
										<form action="" className="mx-2" onSubmit={formik.handleSubmit}>
											<div className="modal-body">
                                                <button type='button' id='close-button' className="text-danger fs-5 p-2 rounded-2" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<label className="col-form-label text-dark">
													Questions
												</label>
												<input
													type="text"
													placeholder="Add Question"
													name="question"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.question}
                                                    className={formik.errors.question && formik.touched.question ? "is-invalid form-control" : "form-control"}
												/>
                                                {formik.touched.question && <small className='text-danger'>{formik.errors.question}</small>}
                        
												<br /><label className="col-form-label text-dark">
													Options
												</label>
												<input
													type="text"
													placeholder="Option A"
													name="option1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.option1}
												/>
                                                {formik.touched.option1 && <small className='text-danger'>{formik.errors.option1}</small>}
												<input
													type="text"
													placeholder="Option B"
													name="option2"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.option2}
												/>
                                                {formik.touched.option2 && <small className='text-danger'>{formik.errors.option2}</small>}
												<input
													type="text"
													placeholder="Option C"
													name="option3"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.option3}
												/>
                                                {formik.touched.option3 && <small className='text-danger'>{formik.errors.option3}</small>}
												<br /><label className="col-form-label text-dark">
													Correct Option
												</label>
												<input
													type="text"
													placeholder="Correct Option"
													name="answer"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.answer}
												/>
                                                {formik.touched.answer && <small className='text-danger'>{formik.errors.answer}</small>}
												<br /><button
													type="submit"
													className="btn btn-secondary bg-secondary mt-3"
												>
													SAVE
												</button>
											</div>
										</form>

										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-info bg-info"
												data-bs-dismiss="modal"
											>
												Close
											</button>
											<button
												type="reset"
												className="btn btn-danger bg-danger ms-2"
                                                onClick={formik.handleReset}
											>
												Reset
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    
                    <div className="mt-4">
                      <div className="col-12">
                        <center>
                          <h4 className='text-decoration-underline'>QUESTIONS AVAILABLE</h4>
                        </center>
                        {admin.map((item, index) => (
                          <div className="container">
                            <h5>
                              {index + 1}. {item.question}
                            </h5>
                            <p>
                              <span>(a) {item.option1} </span>
                              <br />
                              <span>(b) {item.option2} </span>
                              <br />
                              <span>(c) {item.option3} </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
				</div>
			</div>
		</>
	);
}

export default Admin