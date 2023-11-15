import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    let navigate=useNavigate()
    //hooks
    const {id}=useParams()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
    useEffect(()=>{
        loadUser()
    },[])
 
  const onSubmitHandler=async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateUser/${id}`,user);
    navigate("/")

  }

  const loadUser=async()=>{
    const result=await axios.get(`http://localhost:8080/getById/${id}`)
    setUser(result.data)
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
          <h3 className="tex-center">Edit User </h3>
          <form  onSubmit={(e)=>onSubmitHandler(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
             
              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
              <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary mx-2">
              Submit
            </button>
            <Link  className="btn btn-outline-danger" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
