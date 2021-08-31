import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Views/Home/Home';
import Authorization from './components/Views/Authorization/Authorization';
import Registration from './components/Views/Registration/Registration';
import CreateNote from './components/CreateNote/CreateNote';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ErrorMessage from './components/UI/ErrorMessage';

interface Page{
  path: string;
  name: string;
  src: any;
}

function App() {
  let pages: Array<Page> = [
    {
      path: "/(home|)/:page?",
      name: "Home",
      src: <Home />
    },
    {
      path: "/auth",
      name: "Authorization",
      src: <Authorization />
    },
    {
      path: "/register",
      name: "Registration",
      src: <Registration />
    },
    {
      path: "/note/create",
      name: "Create Note",
      src: <CreateNote></CreateNote>
    },
    {
      path: "/note/update/:id",
      name: "Update Note",
      src: <CreateNote></CreateNote>
    },
    {
      path: "/note/error/:message",
      name: "Error",
      src: <ErrorMessage></ErrorMessage>
    },
  ]
  return (
  <Router>
    <div>
      <Switch>
        {pages.map((page, key) => 
        <Route key={key} path={page.path}>
          {page.src}
        </Route>)}
      </Switch>
    </div>
  </Router>)
}

export default App;
