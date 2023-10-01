import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export default function RegisterLogin() {
  const history = useNavigate();
  
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, "authData");

      history('/home');
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {

        signInWithEmailAndPassword(auth, email, password)
          .then(() => {

            history('/home');
          })
          .catch((signInError) => {
            console.error(signInError.message);
          });
      } else {
        console.error(error.message);
      }
    });
  
  }
  
  return (
      <div>
        <h1>Register - Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name='email' placeholder='Email' /><br />
          <input name='password' placeholder='Password' type='password' /><br /><br />
          <button name='reglog'>Register / Login</button>
        </form>
      </div>
    );
}