/*import React from "react";
import { Link } from "react-router-dom";
const NavBar = () =>{
    return(
      <nav>
       <li><Link to='/'>Register</Link></li> 
       <li><Link to='/About'>Login</Link></li> 
       <li><Link to='/fun'>Contact</Link></li> 
       <li><Link to='/class'>About</Link></li> 

      </nav>
    );
}
export default NavBar;*/
/*import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
//import "../css/task1.css";
import "../CSS/task1.css";

const NavBar = () => {
  //symatic tags
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preverntDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    /*<nav>
    <li><Link to= '/'>Home</Link></li>
    <li><Link to= '/about'>About</Link></li>
    <li><Link to= '/fun'>FunctionalCompoenent</Link></li>
    <li><Link to= '/comp'>ClassComponent</Link></li>
  </nav>*/
    /*<div className="contact-div">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullname "
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="textarea"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="text-cont"></textarea>
        
        
        
        
        
        
      </div>
      </form >
    </div>

    /*
  <div className="div-tag">
    <h1>Contact us :</h1>
    <form>
      <label> FullName: Sri Ishwarya K</label>
      <label> Email Address: ishwaryasri1912@gmail.com</label>
    </form>
  </div>
*/
 // );
//};
//export default NavBar;*/




import React from "react";
import {Link} from "react-router-dom";
const NavBar1 = () =>{
 return <nav>
      <li><Link to ='/register'>Register</Link></li>
      <li><Link to ='/login'>Login</Link></li>
      <li><Link to ='/contact'>Contact</Link></li>
  </nav>
}
export default NavBar1;



