// import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import * as yup from "yup";
import mylogo from "../assets/Screenshot 2022-09-10 140609.png";
import logoname from "../assets/Screenshot 2022-09-10 141710.png";

const Admin = () => {
    const [allUser, setallUser] = useState([]);
    const [currentuser, setcurrentuser] = useState("");
    const [currentuserdetails, setcurrentuserdetails] = useState({});
    const [customer, setcustomer] = useState({});
    const [Error, setError] = useState("");
    const [admin, setadmin] = useState([])
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("signinEmail")
        navigate('/signin')
    }

    useEffect (() => {
        if (localStorage.quiz && localStorage.signinEmail && localStorage.users) {
            let AllUser = JSON.parse(localStorage.quiz);
            setallUser(JSON.parse(localStorage.quiz));
            setcurrentuser(JSON.parse(localStorage.signinEmail));
            setcurrentuserdetails(JSON.parse(localStorage.users));
            let email = JSON.parse(localStorage.quiz).email;
            let index = JSON.parse(localStorage.quiz).findIndex(
                (x) => x.email == email
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

        <div className="container text-light p-5">
            <div className="row my-2">
                <h3 className="text-center">SET QUESTIONS</h3>

                <div className="row">
                    <div className="">
                        <button type='button' data-bs-toggle="modal" data-bs-target="#money" className="btn btn-success bg-success rounded-2">Set Questions</button>

                        <div className="modal bg-success" id='money' data-bs-backdrop="static">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form action="" className='mx-2'>
                                        <div className="modal-header text-dark">
                                            <select name="category" >
                                                <option>Category</option>
                                                <option value="English">English</option>
                                                <option value="Biology">Biology</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>

                                        <div className="modal-body">
                                            <label className="col-form-label text-dark">
                                                Questions
                                            </label>
                                            <input type="text" placeholder='Add Question' name='question' />
                                            <label className="col-form-label text-dark">
                                                Options
                                            </label>
                                            <input type="text" placeholder='Option A' name='option1' />
                                            <input type="text" placeholder='Option B' name='option2' />
                                            <input type="text" placeholder='Option C' name='option3' />
                                            <label className="col-form-label text-dark">
                                                Correct Option
                                            </label>
                                            <input type="text" placeholder='Correct Option' name='answer' />
                                            <button type='submit' className="btn btn-secondary bg-secondary mt-3">SAVE</button>
                                        </div>
                                    </form>

                                    <div className="modal-footer">
                                        <button type='button' className="btn btn-info bg-info" data-bs-dismiss="modal">Close</button>
                                        <button type='reset' className="btn btn-danger bg-danger ms-2">Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Admin