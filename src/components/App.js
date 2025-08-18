import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


import user from "../data/user";
console.log(user);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home username={user.name} city={user.city} color={user.color} />
        <About bio={user.bio} links={user.links} />
      </div>
    );
  }
}

export default App;
