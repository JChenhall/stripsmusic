import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin.jsx';
import Contact from './components/Contact/Contact.jsx';
import Music from './components/Music/Music.jsx';
import AdminSongList from './components/Admin/AdminSongList/AdminSongList';
import AdminSongLibrary from './components/Admin/AdminSongLibrary/AdminSongLibrary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <section>
        <Switch>
          <Route path="/music" exact component={Music}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/adminlogin" exact component={AdminLogin}/>
          <Route path="/about" exact component={About}/>
          <Route path="/adminsonglist" exact component={AdminSongList}/>
          <Route path="/adminsonglibrary" exact component={AdminSongLibrary}/>
          <Route path="/" exact component={Home}/>
        </Switch>
    </section>
  </Router>
  );
}

export default App;
