import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();
    const [Credential , setCredential] = useState({name:"" , email:"", password:"" ,address:""})

    const handelsubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:Credential.name , email:Credential.email , password:Credential.password , location:Credential.address})
        })

        const json = await response.json()
        console.log(json);

        if(!json.success)
        {
            alert("Enter valid Credentials");
        }
        if(json.success)
        {
            navigate("/Login");
        }
    }

    const onChange=(event)=>{
        setCredential({...Credential,[event.target.name]:event.target.value})
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handelsubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={Credential.name} onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={Credential.email} onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={Credential.password} onChange={onChange}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" value={Credential.address} onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/Login" className="m-3 btn btn-danger">Already Signup</Link>
                </form></div>
        </>
    )
}

export default Signup;
