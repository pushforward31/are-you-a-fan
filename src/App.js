import React, { Component } from "react";
import HeroList from "./components/HeroList";
import Wrapper from "./components/Wrapper";
import Titlebox from "./components/Titlebox";
import heroes from "./heroes.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const heroes = this.state.heroes.map(hero => hero.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ heroes });
  };

  // Map over this.state.friends and render a HeroList component for each friend object
  render() {
    return (
      <div className = "cover">
        <Wrapper>
          <header className= "title">
            <Titlebox>Heroes List</Titlebox>
          </header>

        {this.state.heroes.map(hero => (
          <HeroList
            removeFriend={this.removeFriend}
            id={hero.id}
            key={hero.id}
            name={hero.name}
            image={hero.image}
            occupation={hero.occupation}
            location={hero.location}
          />
        ))}
        
      </Wrapper>

    </div>
    );
  }
}

export default App;
