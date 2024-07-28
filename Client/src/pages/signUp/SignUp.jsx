import  './SignUp.css';
import { useState } from 'react';

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  })
const handleTnput =(e) => {
 let name = e.target.name;
 let value = e.target.value;

 setUser({
  ...user,[name]:value,
 })
}

const handleSubmit =(e) =>{
  e.preventDefault();
  console.log(user);
}
  return (
      <section>
          <main>
              <div className="formContainer">
                  <form className="form" onSubmit={handleSubmit}>
                      <fieldset>
                          <h1 className="title">Registration Form</h1>
                          <div className="fullName">
                              <input type="text" name="username" id="username" placeholder="User name" required value={user.username} onChange={handleTnput}/>
                              <div className="gender">
                                  <label>
                                      <input type="radio" name="gender" value="male" checked={user.gender === "male"} required onChange={handleTnput}/>
                                      Male
                                  </label>
                                  <label>
                                      <input type="radio" name="gender" value="female" checked={user.gender === "female"} required onChange={handleTnput}/>
                                      Female
                                  </label>
                              </div>
                          </div>
                          <div className="otherInputs">
                              <input type="tel" name="phone" id="phone" placeholder="Telephone Number" required value={user.phone} onChange={handleTnput}/>
                              <input type="text" name="email" id="email" placeholder="Enter your email" required value={user.email} onChange={handleTnput}/>
                              <input type="password" name="password" id="password" placeholder="Enter your password"                       required value={user.password} onChange={handleTnput}                                
                              />
                          </div>
                          <br />
                          <br />
                          <input type="submit" name="Register" className="submit" />
                      </fieldset>
                  </form>
              </div>
          </main>
      </section>
  );
}

export default SignUp