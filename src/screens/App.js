import React, { useEffect } from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {useSelector} from "react-redux";
import {selectUser} from "../redux/features/userSlice";
import Login from './component/Login';
import { auth } from '../firebase';

function App() {
 const user = useSelector(selectUser);

 useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user Logged in
      }
      else{
        //logged out
      }
    })
 }, [])
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
