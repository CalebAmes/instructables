import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import SplashPage from "./components/SplashPage";
import Create from "./components/Create";
import Projects from "./components/AllProjectsPage";
import Project from "./components/SingleProjectPage";
import CreateProject from './components/ProjectCreationPage'
import { authenticateUser } from './store/session'
import Category from "./components/UniqueCategoryPage";
import UserProfilePage from "./components/UserProfilePage";
import Footer from "./components/Footer";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.currentUser.user)

  useEffect(() => {
    // (async () => {
    //   const user = await authenticate();
    //   if (!user.errors) {
    //     console.log("HERERERE", user)
    //     console.log("HEREHE:,", currentUser)
    //     setAuthenticated(true);
    //   }
    //   setLoaded(true);
    // })();
    if (currentUser) {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
    setLoaded(true)
  }, [currentUser]);
  
  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} authenticated={authenticated} />
      <Switch>
        <Route exact path='/'>
          <SplashPage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path='/profile/:id'>
          <UserProfilePage />
        </Route>
        <Route exact path='/'>
          <SplashPage />
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
        <ProtectedRoute path='/create/new' authenticated={authenticated}>
          <CreateProject/>
        </ProtectedRoute>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/project/:id' exact={true}>
          <Project />
        </Route>
        <Route path='/category/:id'>
          <Category />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
