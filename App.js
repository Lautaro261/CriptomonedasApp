import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />

      <View style={styles.content}>
        <Form />
      </View>
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
