import React, { useEffect } from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';
import Chat from './component/Chat';
import { useSelector, useDispatch} from "react-redux";
import {selectUser} from "../redux/features/userSlice";
import Login from './component/Login';
import { auth } from '../firebase';
import {login,logout} from '../redux/features/userSlice'

function App() {
 const user = useSelector(selectUser);
 // Shoot things into the data layer
const dispatch = useDispatch();
useEffect(() => {
  //listner
  auth.onAuthStateChanged((authUser) => { 
    if (authUser) {
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName
      }))
    } else {
      dispatch(logout())
    }
  })
}, [dispatch])


return (
  <div className="App">
    {user ? (
      <>
        <Sidebar />
        <Chat />
      </>

    ) : (
        <Login />
      )}
  </div>
);
}

export default App;
