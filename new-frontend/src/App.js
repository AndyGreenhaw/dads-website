import './App.css';
import React, {useEffect, useState} from 'react'
import { HashRouter } from 'react-router-dom'; 
import AppRoutes from './routes/PageRoutes.js';

function App() {
  // const [users, setUsers] = useState([])

  // useEffect(() => { 
  //   // Make sure the URL matches your backend's endpoint 
  //   fetch('http://localhost:3001/api/users')
  //   .then(response => {
  //     console.log(response)
  //     return response.json()
  //   }).then(data => setUsers(data)); 
  // }, []);
  
  // console.log(users)
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
