import React from "react";
import Header from "../Header/Header";
import TinderCards from "../TinderCards/TinderCards";
import SwipeButtons from "../SwipeButtons/SwipeButtons";
import Chats from "../Chats/Chats";
import ChatScreen from "../ChatScreen/ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

{
  /* <h1>Let's build the TINDER clone💏</h1> */
}
{
  /* Header */
}
{
  /* tinder cards */
}
{
  /* Buttons below tinder cards */
}
{
  /* Chat screen */
}
{
  /* Individual chat screen */
}

export default App;
