import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Profiles from "./Components/Profiles"
import AppContext from "./AppContext"

let data = {
  newsArticles: [
      { 
          title: "Winning at Life!",
          article: "There are many ways to do so...but the best is just try, try, try again!"
      },
      { 
        title: "Active Shooter at JBSA!",
        article: "They hit no one. Everyone safe!"
      },      
      { 
        title: "Random Stuff",
        article: "Check out this completely random stuff."
      }
  ],
  contactProfiles: [
      {
          firstName: "Willie",
          lastName: "Dustice",
          birthday: "01/01/1978 00:00:00",
          profileImage: "https://randomuser.me/api/portraits/lego/1.jpg"
      },
      {
        firstName: "Bubba",
        lastName: "Hatman",
        birthday: "01/01/1979 00:00:00",
        profileImage: "https://randomuser.me/api/portraits/lego/2.jpg"
    },
    {
      firstName: "Janice",
      lastName: "Shermon",
      birthday: "01/11/1979 00:00:00",
      profileImage: "https://randomuser.me/api/portraits/lego/6.jpg"
  },
  ]
}

function App() {
  return (
    <AppContext.Provider value={{data}}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profiles">Profiles</Link>
              </li>
            </ul>
          </nav>

          {//<Route path="lists/:listId" component={List}/>
          //<Link to={`/lists/${props.list._id}`}>{props.list.name}</Link>}

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profiles">
            <Profiles />
          </Route>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
