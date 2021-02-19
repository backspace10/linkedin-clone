import React, { useEffect } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./components/body/sidebar/Sidebar";
import Feed from "./components/body/feed/Feed";
import Header from "./components/header/Header";
import Widget from "./components/body/widget/Widget";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/login/Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.user,
            uid: userAuth.user,
            displayName: userAuth.name,
            photoURL: userAuth.profilePic,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
