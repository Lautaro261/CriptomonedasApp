import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";


const Form =()=>{

    return(
        <View>
            <Text style={styles.label}>Moneda</Text>
            
            <Text style={styles.label}>Criptomoneda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    label:{
        textTransform:'uppercase',
        fontSize:18,
        marginVertical:15,
        color:'#fff'
    }

})

export default Form