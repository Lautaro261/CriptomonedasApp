import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Price = ({resultado}) => {
  if (Object.keys.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.texto, styles.precio]}>
        <Text style={styles.span}>{resultado.PRICE}</Text>
      </Text>

      <Text style={styles.texto}>
        {' '}
        Precio mas alto del día{' '}
        <Text style={styles.span}>{resultado.HIGHDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Precio mas bajo del día{' '}
        <Text style={styles.span}>{resultado.LOWDAY}</Text>
      </Text>

      <Text style={styles.texto}>
        Variacion de las ultimas 24 hs.{' '}
        <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
      </Text>

      <Text style={styles.texto}>
        Última Actialización{' '}
        <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e49e2',
    padding: 18,
    marginTop: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '300',
  },
  precio: {
    fontSize: 24,
  },
  span: {
    fontWeight: '700',
    color: '#000000',
  },
});

export default Price;
