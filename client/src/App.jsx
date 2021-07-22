import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { verify } from "./services/users";

//components
import AllWines from "./screens/AllWines/AllWines";
import Home from "./screens/Home/Home";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import WineAdd from "./screens/WineAdd/WineAdd";
import WineDetail from "./screens/WineDetail/WineDetail";
import WineEdit from "./screens/WineEdit/WineEdit";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      setUser(user ? user : null);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSignedIn(user ? true : false);
    }, 500);
  }, [user]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>

        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>

        <Route exact path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>

        <Route exact path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>

        <Route exact path="/wines">
          <AllWines user={user} />
        </Route>

        <Route exact path="/edit/:id">
          <WineEdit user={user} />
        </Route>

        <Route exact path="/add-wine">
          <WineAdd user={user} />
        </Route>

        <Route exact path="/wines/:id">
          <WineDetail user={user} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
