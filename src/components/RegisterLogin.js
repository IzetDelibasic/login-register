import React from 'react';

export default function RegisterLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  }
  
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name='email' placeholder='Email' /><br />
        <input name='password' placeholder='Password' type='password' /><br /><br />
        <button>SignIn</button>
      </form>
    </div>
  );
}