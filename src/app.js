import React from "react";
import Score from "./components/Score";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {

    state = {
      characters: characters,
      pickedChars: [],
      score: 0,
      alertMessage: ""
    }

    //componentDidMount(){

    //};
  
    handlePicked = event => {
  
      const name = event.target.attributes.getNamedItem("name").value;
      this.shuffleCharacters()
      this.checkGuess(name);
    }

      shuffleCharacters = () => {
        this.setState(this.state.characters = this.shuffleArray(this.state.characters))
      }
      shuffleArray = (characters) => {
        let characters = this.state.characters;
      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
      }

      checkGuess = (name, cb) => {
        const newState = { ...this.state };
        if (newState.pickedChars.includes(name)) {
          newState.alertMessage = `YOU ALREADY PICKED "${name.toUpperCase()}"!`
          newState.pickedChars = []
          this.setState(this.state = newState)
        } else {
          newState.pickedChars.push(name)
          newState.alertMessage = `GOOD CHOICE!`
          this.setState(this.state = newState)
        }
        cb(newState, this.alertWinner)
      }

      alertWinner = (newState) => {
        if (newState.pickedChars.length === 12) {
          newState.alertMessage = "YOU DID IT, CHAMP!";
          newState.pickedChars = [];
          this.setState(this.state = newState)
        }
      }


render() {
  return(
    <div>
      <Wrapper>Clicky Game <Score>{this.score}</Score> <Alert>{this.alertMessage} </Alert></Wrapper>
      <body>
        <Card>
              id={card.id}
              name={card.name}
              image={card.image}
              key={card.id}
              clicked={card.clicked}
        </Card>
      </body>
    </div>
  )
}
}
export default App;