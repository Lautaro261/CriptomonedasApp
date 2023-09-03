import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";


const Form =()=>{
    const [moneda, setMoneda] = useState('')
    const [cripto, setCripto]= useState('')
    const [criptos, setCriptos] = useState('')

    const obtenerMoneda = (moneda) =>{
        setMoneda(moneda)
    }

    useEffect(()=>{
        const consultaAPI =async()=>{
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)
            console.log(resultado.data.Data)
            setCriptos(resultado.data.Data)
        }

        consultaAPI()
    },[])

    return(
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker 
            selectedValue={moneda}
            onValueChange={(moneda)=> obtenerMoneda(moneda)}
            itemStyle
            >
                <Picker.Item label="Seleccione" value=''/>
                <Picker.Item label="Dolar US" value='USD'/>
                <Picker.Item label="Peso MEX" value='MXN'/>
                <Picker.Item label="Euro" value='EU'/>
                <Picker.Item label="Libra Esterlina" value='GBP'/>
            </Picker>
            
            <Text style={styles.label}>Criptomoneda</Text>

            <Picker 
            selectedValue={cripto}
            onValueChange={(cripto)=> obtenerMoneda(cripto)}
            >
                <Picker.Item label="Seleccione" value=''/>
                { criptos.map(cripto =>(
                    <Picker.Item key={cripto.CoinInfo.id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                )) }
            </Picker>
            
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
        color:'#fff',
        fontFamily:'Lato-Black'
    }

})

export default Form