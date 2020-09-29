import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "../../axios";
import database from "../../firebase";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = database.collection("people").onSnapshot((snapshop) => {
  //     setPeople(snapshop.docs.map((doc) => doc.data()));
  //   });
  //   return () => {
  //     //this is the cleanup..
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfframe = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => swiped(direction, person.name)}
            onCardLeftScreen={() => outOfframe(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
