import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from "../components/Card"
import GameOver from "../assets/gameover.jpg"
import Win from "../assets/win.jpg"

const ResultScreen = ({result}) => {
    const [image, setImage] = useState(GameOver, Win)

    useEffect(() => {
        handleImage()
    }, [])


    const handleImage = () => {
        if(result === "Win") { 
            setImage(Win)
            return
        }
        setImage(GameOver)
    } 

    return (
        <View style = {styles.container}>
            <Card>
                <Text>{`You ${result}`}</Text>
            </Card>
            <Image 
            style = {styles.imageContainer}
            source = {image}
            />
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    imageContainer: {
        height: "20%",
        width: "50%",
        marginTop: "10%"
    }
})