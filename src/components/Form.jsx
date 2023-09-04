import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Form = ({moneda, setMoneda, cripto, setCripto, setGetApi}) => {
  const [criptos, setCriptos] = useState([]);

  const obtenerMoneda = moneda => {
    setMoneda(moneda);
  };

  const obtenerCripto = cripto => {
    setCripto(cripto);
  };
  const ValidacionCotizarPrecio = () => {
    if (moneda.trim() === '' || cripto.trim() === '') {
      alertaConsulta();
      return;
    }

    //cambiar  estado de consulta API
    setGetApi(true);
  };
  const alertaConsulta = () => {
    Alert.alert('Error', 'Ambos campos son obligatorios', [{text: 'Ok'}]);
  };

  useEffect(() => {
    const consultaAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      console.log(resultado.data.Data);
      setCriptos(resultado.data.Data);
    };

    consultaAPI();
  }, []);

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={moneda => obtenerMoneda(moneda)}
        itemStyle>
        <Picker.Item label="Seleccione" value="" />
        <Picker.Item label="Dolar US" value="USD" />
        <Picker.Item label="Peso MEX" value="MXN" />
        <Picker.Item label="Euro" value="EU" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>

      <Picker
        selectedValue={cripto}
        onValueChange={cripto => obtenerCripto(cripto)}>
        <Picker.Item label="Seleccione" value="" />
        {criptos.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight
        style={styles.btnCotizar}
        onPress={() => ValidacionCotizarPrecio()}>
        <Text style={styles.btnCotizarText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    textTransform: 'uppercase',
    fontSize: 18,
    marginVertical: 15,
    color: '#fff',
    fontFamily: 'Lato-Black',
  },
  btnCotizar: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    borderColor: '#43388b',
    borderWidth: 5,
  },
  btnCotizarText: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Form;
