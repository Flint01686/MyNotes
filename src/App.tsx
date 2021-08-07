import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Views/Home/Home';
import Authorization from './components/Views/Authorization/Authorization';
import Registration from './components/Views/Registration/Registration';
import CreateNote from './components/CreateNote/CreateNote';


function App() {
  // return (<Home></Home>);
  // return (<Authorization></Authorization>);
  // return (<Registration></Registration>);
  return (<CreateNote text=""></CreateNote>);

}

export default App;
