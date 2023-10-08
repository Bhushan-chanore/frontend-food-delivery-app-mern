import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

function Login() {

  let navigate = useNavigate()
  const [Credential, setCredential] = useState({ email: "", password: "" })

  const handelsubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/Loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: Credential.email, password: Credential.password })
    })

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid Credentials");
    }
    if (json.success) {
      // we are storing the email also on localstorage because it needed to add cart on database
      localStorage.setItem("userEmail", Credential.email)
      localStorage.setItem("authToken" , json.authToken)
      navigate("/")
    }
  }

  const onChange = (event) => {
    setCredential({ ...Credential, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handelsubmit}>
         

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={Credential.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={Credential.password} onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/createuser" className="m-3 btn btn-success">I am new User</Link>
        </form></div>
    </>
  )
}

export default Login;
