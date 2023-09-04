import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Header from './src/components/Header';
import Form from './src/components/Form';
import Price from './src/components/Price';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [cripto, setCripto] = useState('');
  const [getApi, setGetApi] = useState(false); //dejar en false
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarCripto = async () => {
      if (getApi) {
        //hacer peticion a API
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const result = await axios.get(url);
        console.log(result.data.DISPLAY[cripto][moneda]);
        setLoading(true);

        setTimeout(() => {
          setResultado(result.data.DISPLAY[cripto][moneda]);
          setGetApi(false);
          setLoading(false);
        }, 2000);
      }
    };

    cotizarCripto();
  }, [getApi]);

  const spinner = loading ? (
    <ActivityIndicator size="large" color="#5e49e2" />
  ) : (
    <Price resultado={resultado} />
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />

        <Image
          style={styles.image}
          source={require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.content}>
          <Form
            moneda={moneda}
            setMoneda={setMoneda}
            cripto={cripto}
            setCripto={setCripto}
            setGetApi={setGetApi}
          />
        </View>
        <View style={{marginTop: 40}}>{spinner}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171625',
    /* alignItems: 'center',
    justifyContent: 'center',  */
  },
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '1%',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
