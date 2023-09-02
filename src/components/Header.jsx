import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";

const Header = ()=>{

    return(
        <Text style={styles.headerText}>Criptomonedas</Text>

    )
}

const styles= StyleSheet.create({
    container:{

    },
    headerText:{
        paddingTop: Platform.OS === 'ios' ? 50 : 50,
        backgroundColor:'#5e49e2',
        paddingBottom:10,
        textAlign:'center',
        fontSize:18,
        color:'#fff',
        marginBottom:30
    }
})

export default Header