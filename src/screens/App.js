import React, { useEffect } from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {useSelector, useDispatch} from "react-redux";
import {selectUser} from "../redux/features/userSlice";
import Login from './component/Login';
import { auth } from '../firebase';
import {login,logout} from '../redux/features/userSlice'

function App() {
 const user = useSelector(selectUser);
 // Shoot things into the data layer
const dispatch = useDispatch();
 useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{

      if(authUser){
        //user Logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }
      else{
        //logged out
      }
    })
 }, [dispatch])
  return (
    //BEM naming convention
    <div className="App">
      {user ?(
      <>
       <Sidebar/>
      <Chat/>
      </>
      ):(
        <Login></Login>
      )}
    </div>
  );
}

export default App;
