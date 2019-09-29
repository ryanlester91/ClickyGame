import React from "react";
import Score from "./components/Score";
import Alert from "./components/Alert";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {

    state = {
      characters: characters,
      pickedChars: [],
      topScore: 0,
      alertMessage: ""
    }

    //componentDidMount(){

    //};
  
    handlePicked = event => {
  
      const name = event.target.attributes.getNamedItem("name").value;
      this.shuffleCharacters()
      //const newState = { ...this.state };

      shuffleCharacters = () => {
        this.setState(this.state.characters = this.shuffleArray(this.state.characters))
      }

      //shuffleArray = () ==> {}


render() {
  return(
    <div>
      <Wrapper>Clicky Game</Wrapper>
    </div>
  )
}