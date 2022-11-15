import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import colors from '../constants/Colors'
import Input from '../components/Input'

const StartGameScreen = ({onStartGame}) => {
    const [value, setValue] = useState("")
    const [confirmed, setConfirmed] = useState (false)
    const [selectedNumber, setSelectedNumber] = useState ("")

    const handleResetInput = () => {
        setValue("")
        setConfirmed(false)
    }

    const handleConfirmation = () => {
        const choseNumber = parseInt(value)
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return

        setConfirmed(true)
        setSelectedNumber(choseNumber)
        setValue("")
        } 

    const handleInput = (text) => {
        setValue(text.replace(/[^0-9]/g, ""))
    }
    return (
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        <View style = {styles.screen}>
            <Card>
                <Text>Elije un número</Text>
                <Input value = {value} onChangeText = {handleInput}/>
                <View style = {styles.buttonContainer}>
                    <Pressable style = {styles.cleanButton} onPress = {handleResetInput}>
                        <Text style = {{color: "white"}}>Limpiar</Text>
                    </Pressable>
                    <Pressable style = {{...styles.cleanButton, ...styles.confirmButton}} onPress = {handleConfirmation}>
                        <Text style = {{color: "white"}}>Confirmar</Text>
                    </Pressable>
                </View>
            </Card>
            {confirmed && (
            <Card newStyles = {{marginTop: 50, width: 150}}>
                <Text>Tu número:</Text>
                <Text>{selectedNumber}</Text>
                <Button title = "Empezar juego" onPress = {() => onStartGame(selectedNumber)}/>
            </Card>
            )}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 10,
        alignItems: "center",
        marginTop: 50
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    cleanButton: {
        backgroundColor: colors.secondary,
        height: 35,
        width: "30%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    confirmButton: {
        backgroundColor: colors.primary, 
        width: "35%",
    }
})