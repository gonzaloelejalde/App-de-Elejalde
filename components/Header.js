import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Header = ({title, newStyles}) => {
    return (
        <View style = {styles.header}>
            <Text style = {{...styles.headerTitle, ...newStyles}}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: Colors.white,
        fontSize: 22,
    }
    
})