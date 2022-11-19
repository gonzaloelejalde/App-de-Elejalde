import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';
import ResultScreen from "./screens/ResultScreen"

export default function App() {
  const [loaded] = useFonts({
    RubikBubbles: require("./assets/fonts/RubikBubbles-Regular.ttf") 
  })

  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setWinOrLose] = useState(false)
  const [result, setResult] = useState("")

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const handleFinishGame = (selection, number) => {
    if((selection === "lower" && userNumber < number) || (selection === "greater" && userNumber > number))
    {
      setResult("Win")
    } else {
      setResult("Lose")
    }
    setWinOrLose(true)
  }

  let content = <StartGameScreen onStartGame = {handleStartGame}/>

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result = {result}/>
  } else if (userNumber){
    content = <GameScreen handleResult={handleFinishGame}/>
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title = {"Adivina el número"} newStyles = {{fontFamily: "RubikBubbles"}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
