import './Login.css';
import { useState } from 'react';

function Login() {
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
                    <h1 className="title">Login Form</h1>
                    <div className="otherInputs">
                        <input type="text" name="email" id="email" placeholder="Enter your email" required value={user.email} onChange={handleTnput}/>
                        <input type="password" name="password" id="password" placeholder="Enter your password"                       required value={user.password} onChange={handleTnput}                                
                        />
                    </div>
                    <br />
                    <br />
                    <input type="submit" name="login" value="Login" className="login" />
                </fieldset>
            </form>
        </div>
    </main>
</section>
  )
}

export default Login