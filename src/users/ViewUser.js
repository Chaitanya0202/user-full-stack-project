import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });
    const { id } = useParams();

  

  useEffect(() => {
    loadUser();
  },[]);
  const loadUser = async () => {
    const result=await axios.get(`http://localhost:8080/getById/${id}`);
    setUser(result.data);
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
          <h3 className="tex-center">Register User </h3>

          <div className="card">
            <div className="card-header">
              <b> <mark>Hello..! {user.name} </mark></b> 
              <ul className="list-group list-group-flush">
                <li className="list-group m-1">
                  <b>Name : {user.name}</b>
                  
                </li>
                <li className="list-group m-1">
                  <b>Email : {user.email}</b>
                </li>
                <li className="list-group m-1">
                  <b>Password :{user.password}</b>
                </li>
                <li className="list-group">
                  <b>Phone :{user.phone}</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link className="btn btn-primary my-2" to={"/"}>
        Back To Home
      </Link>
    </div>
  );
}
