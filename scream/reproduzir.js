import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function reproduzir() {
  return (
    <View style={styles.container}>

      <View style={styles.containerFoto}>
        <Image style={styles.foto} source={require('../src/onda.png')} />
      </View>

      <View style={styles.containerTemp}>

        <View style={styles.barTemp}>
          <View style={styles.tempLive}></View>
        </View>

        <View style={styles.containerTempos}>
          <Text style={styles.tempAtual}>1:23</Text>
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
          <Image style={styles.iconPause} source={require('../src/pause.png')} />
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
    height: 4,
    width: 330,
    backgroundColor: '#336894',
    borderRadius: 50,
  },
  tempLive: {
    height: 4,
    width: 150,
    backgroundColor: '#00C2FF',
    borderRadius: 50,
  },
  containerTempos: {
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