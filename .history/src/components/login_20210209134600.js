import {useState } from "react";
export default function Login (props){
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
      });
      const [formErrors, setFormErros] = useState({
        emailErrors: null,
        passwordErros: null,
      });
    
    const handleForm = (event)=>{
        const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(event.target.name == "email"){
            setLoginForm({
                ...loginForm,
                email:event.target.value
            })
            setFormErros({
                ...formErrors,
                emailErrors:event.target.value.length === 0 || !(event.target.value.match(emailFormat)) ? "email is not valid" : null
            })
        }else{
            setLoginForm({
                ...loginForm,
                password:event.target.value
            })

            setFormErros({
                ...formErrors,
                passwordErros: event.target.value.length < 8  ? "password must have at least 8 characters" : null
            })
        }
    }

    const handleLogin =()=>{
      localStorage.setItem("email",loginForm.email)
      props.history.push("/ToDo")
    }
    
    return(
        <div className="container">
        <input
        type="email"
          onChange={handleForm}
          placeholder="Email"
          name="email"
          className={`form-control mb-4 ${
            formErrors.emailErrors ? "border-danger" : ""
          }`}
          value={loginForm.email}
        />
        <h5>{formErrors.emailErrors}</h5>
        <input
        type="password"
        onChange={handleForm}
          placeholder="Password"
          name="password"
          className={`form-control mb-4 ${
            formErrors.passwordErros ? "border-danger" : ""
          }`}
          value={loginForm.password}
        />
        <h5>{formErrors.passwordErros}</h5>

        <button onClick={handleLogin} className="btn btn-success" disabled={formErrors.emailErrors||formErrors.passwordErros}>Login</button>
      </div>
        );
}