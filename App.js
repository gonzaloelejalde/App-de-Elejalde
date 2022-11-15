import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    RubikBubbles: require("./assets/fonts/RubikBubbles-Regular.ttf") //Aca se pueden agregar mas 
  })
  const [userNumber, setUserNumber] = useState()

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame = {handleStartGame}/>

  if (userNumber) {
    content = <GameScreen/>
  }

  if (!loaded) {
    return <Text>Cargando...</Text>
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
