import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from './FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export default function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  
  return (
      <div>
          <h1>{login ? "SignIn" : "SignUp"}</h1>
          <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
          <input name='email' placeholder='Email' /><br />
          <input name='password' placeholder='Password' type='password' /><br /><br />
          <button name='reglog'>{login ? "SignIn" : "SignUp"}</button>
        </form>
      </div>
    );
}