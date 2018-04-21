import React, { Component } from "react";
import HeroList from "./components/HeroList";
import Wrapper from "./components/Wrapper";
import Titlebox from "./components/Titlebox";
import heroes from "./heroes.json";


let guesses = 0;
let bestScore = 0;
let message = "Click on an image to earn points, but don't click on any of them more than once!";

class App extends Component {
    
    // Setting this.state.heroes to the heroes json array
    state = {
        heroes,
        guesses,
        bestScore,
        message
    };

    getHero = id => {

        // Make a copy of the state heroes array to work with
        const heroes = this.state.heroes;

        // Filter for the clicked match
        const matches = heroes.filter(match => match.id === id);

        // If the matched image's clicked value is already true, 
        // do the game over actions
        if (matches[0].clicked){

            console.log ("Correct Guesses: " + guesses);
            console.log ("Best Score: " + bestScore);

            guesses = 0;
            message = "Sorry you have clicked that one already....start over"

            for (let i = 0 ; i < heroes.length ; i++){
                heroes[i].clicked = false;
            }

            this.setState({message});
            this.setState({ guesses });
            this.setState({heroes});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (guesses < 17) {

            // Set its value to true
            matches[0].clicked = true;

            // increment the appropriate counter
            guesses++;
            
            message = "Ok ok, keep going you're doing good!";

            if (guesses > bestScore){
                bestScore = guesses;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            heroes.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.heroes equal to the new heroes array
            this.setState({ heroes });
            this.setState({guesses});
            this.setState({message});
        } else {

            // Set its value to true
            matches[0].clicked = true;

            // restart the guess counter
            guesses = 0;

            // Egg on the user to play again
            message = "Seems like you know the difference between your heroes...nice job";
            bestScore = 18;
            this.setState({ bestScore });
            
            for (let i = 0 ; i < heroes.length ; i++){
                heroes[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            heroes.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.heroes equal to the new heroes array
            this.setState({ heroes });
            this.setState({guesses});
            this.setState({message});

        }
    };

    render() {
        return (
            <Wrapper>
            <div className = "jumbotron">
                <Titlebox>Heroes: Choose a hero but lets not do it twice</Titlebox>
        
                <h3 className="scoreSummary">
                    {this.state.message}
                </h3>
                
                <h3 className="scoreSummary">
                    Correct Guesses: {this.state.guesses} 
                    <br />
                    Best Score: {this.state.bestScore} 
                </h3>
              </div>
                {this.state.heroes.map(match => (
                    <HeroList
                        getHero={this.getHero}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;


// import "./App.css";

// class App extends Component {
//   // Setting this.state.heroes to the heroes json array
//   state = {
//     heroes,
//     count: 0,
//     clicked: [],
//     count2: 0
//   };
   

//   removeFriend = id => {
//     // Filter this.state.heroes for heroes with an id not equal to the id being removed
//     const hero = this.state.heroes.filter(e => e.id === id)[0];

//     this.setState({ clicked: [hero, ...this.state.clicked] }, function() {
//         console.log(this.state.clicked);
//       });
//     if (hero.id === hero.id){
//       this.setState(this.count.getInitialState());

//     } else{
//       this.setState({ count: this.state.count + 1 });
//       this.setState({ count2: this.state.count2 + 1 });
//      // this.setState({count: this.state.count});

//     }



//     // Set this.state.heroes equal to the new heroes array
//    // handleIncrement = id => {
//     // We always use the setState method to update a component's state
//     //const count =
    
//  // };
//   //}
//   };

//   // Map over this.state.heroes and render a HeroList component for each friend object
//   render() {
//     return (
//       <div className = "cover">
//         <Wrapper>
//           <header className= "title">
//             <Titlebox>Heroes List</Titlebox>
//             <h2 id = "Score"> Score: {this.state.count} | Top Score: {this.state.count2} </h2>

            
//           </header>

//         {this.state.heroes.map(hero => (
//           <HeroList
//             removeFriend={this.removeFriend}
          
//             id={hero.id}
//             key={hero.id}
//             name={hero.name}
//             image={hero.image}
//             occupation={hero.occupation}
//             location={hero.location}
//           />
//         ))}
        
//       </Wrapper>

//     </div>
//     );
//   }
// }

// export default App;
