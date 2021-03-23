import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import SplashPage from "./components/SlashLandingPage";
import Create from "./components/Create";
import Projects from "./components/AllProjectsPage";
import Project from "./components/SingleProjectPage";
import {authenticateUser} from './store/session'
import Category from "./components/UniqueCategoryPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   (async() => {
  //     const res = await dispatch(auth.authenticateUser());
  //     if (res.ok) {
  //       setAuthenticated(true)
  //     }
  //     setLoaded(true)
  //     })();
  //   }, []);

  //   if (!loaded) {
  //       return null;
  // }

  // if 
  //   })dispatch(auth.authenticateUser()).then(() => setLoaded(true)).then(() => setAuthenticated(true));
  // }, [dispatch]);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <Route exact path='/'>
          <SplashPage/>
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route exact path='/'>
          <SplashPage/>
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/projects/:id'>
          <Project />
        </Route>
        <Route path='/category/:id'>
          <Category/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
