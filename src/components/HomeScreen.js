import React from 'react';
import {signOut} from 'firebase/auth';
import { database } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  console.log('HomeScreen component rendered');

  const history = useNavigate();
  
  const handleClick = () => {
    signOut(database).then(val =>{
        console.log(val, "val")
        history('/');
    })
  }
  
  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        Click to explore my further progress and projects:{" "}
        <a href="https://github.com/IzetDelibasic" target="_blank" rel="noopener noreferrer">
          GitHub profile
        </a>
      </p>

      <button onClick={handleClick}>SignOut</button>
    </div>
  );
}
