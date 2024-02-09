// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Styles/Login.css'
import {Link} from 'react-router-dom'
import { useState} from 'react';
import {useNavigate} from "react-router-dom"

const SigninPage = () => {

  const navigate=useNavigate();
  const[role,setRole]=useState("");
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  
  const handleSubmit= async (e)=>{
    // e.preventDefault();
    // dispatch(
    //   login({
    //    name:username
    //   })
    //   )
      // navigate('/Home');
  try{
    const response=await axios.post('http://localhost:8081/api/v1/auth/authenticate',{
        "role":role,
        "name":username,
        "password":password
    });
    navigate('/Home');
    let token=response.data.token;
    let user=response.data.id;
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
}
catch(error){
    window.alert("Incorrect Username or Password !!!");
}
}


  return (
    <div className="over">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        {/* <form className='frm' onSubmit={handleSubmit}> */}
        <form className='frm'>
            <h3 className="htag"><b>Login Here</b></h3>
           
            <div className='rl'>
              <label>Choose your Role:</label>
              <input className="radioa" 
              type="radio" 
              value="Admin"
              name="role"
              onChange={(event) => setRole(event.target.value)}
              id="adminRadio" required/>
              <label>ADMIN</label>
              <input className="radiou" 
              type="radio" 
              name="role" 
              value="User"
              onChange={(event) => setRole(event.target.value)}
              id="userRadio" required/>
              <label>USER</label>
            </div><br></br>


            <label className='lab'>Username</label>
            <input className="in" 
            type="text" 
            value={username}
            name="username"
            onChange={(event) => setUsername(event.target.value)} 
            placeholder="Enter your Username" 
            id="username" required/>

            <label className="lab">Password</label>
            <input className="in" 
            type="password" 
            value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your Password" 
            id="password" required/>

            {/* <center><button onSubmit={(e) => handleSubmit(e) } className='but'>Login</button></center> */}
            <Link to="/Home"><center><button className='but'>Login</button></center></Link>
            <br></br>
            
            
            <h4>Don't have an Account?  <Link to="/Register"><div className='reg'>Register</div></Link></h4>
        </form>
    </div>
  );
  };


export default SigninPage;