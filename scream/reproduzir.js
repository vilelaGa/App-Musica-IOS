import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Slider } from 'react-native';

export default function reproduzir() {

  const [segundos, setSegundos] = useState(0);

  return (
    <View style={styles.container}>

      <View style={styles.containerFoto}>
        <Image style={styles.foto} source={require('../src/Image.jpeg')} />
      </View>

      <View style={styles.containerTemp}>

        <Slider style={styles.barTemp}
          value={segundos}
          onValueChange={(value) => {
            setSegundos(value)
          }}></Slider>

        <View style={styles.containerTempos}>
          <Text style={styles.tempAtual}>{segundos}</Text>
          <Text style={styles.tempTotal}>3:12</Text>
        </View>

      </View>

      <View style={styles.containerNomes}>
        <Text style={styles.nomeMusica}>Ekballo</Text>
        <Text style={styles.nomeArtista}>Alexandro Vilas Boas</Text>
      </View>

      <View style={styles.painelControle}>

        <TouchableOpacity style={styles.btnArrowBack}>
          <Image style={styles.arrowBack} source={require('../src/arrowBack.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPause}>
          <Image style={styles.iconPause} source={require('../src/play.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnArrowNext}>
          <Image style={styles.iconArrowNext} source={require('../src/arrowNext.png')} />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1A25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFoto: {
    marginBottom: Platform.OS === 'android' ? 50 : 150,
  },
  foto: {
    width: 230,
    height: 230,
  },
  containerTemp: {
    marginTop: Platform.OS === 'android' ? 10 : -100,
  },
  barTemp: {
    height: 2,
    width: 330,
  },
  containerTempos: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  tempAtual: {
    flex: 1,
    color: '#fff',
  },
  tempTotal: {
    color: '#fff',
  },
  containerNomes: {
    alignItems: 'center',
    marginTop: 50,
  },
  nomeArtista: {
    color: '#fff',
    fontWeight: '100',
  },
  nomeMusica: {
    color: '#fff',
    fontWeight: 'bold'
  },
  painelControle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 70,
  },
  btnArrowBack: {
    shadowOpacity: 1,
    shadowColor: '#336894',
    backgroundColor: '#0D1A25',
    borderRadius: 100,
    padding: 15,
    right: 65,
  },
  btnPause: {
    shadowOpacity: 1,
    shadowColor: '#336894',
    backgroundColor: '#0D1A24',
    borderRadius: 100,
    padding: 20,
  },
  btnArrowNext: {
    shadowOpacity: 1,
    shadowColor: '#336894',
    backgroundColor: '#0D1A25',
    borderRadius: 100,
    padding: 15,
    left: 65,
  },
});