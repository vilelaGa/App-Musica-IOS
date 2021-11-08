import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function musicas({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btnMusicaR} onPress={() => navigation.navigate('Reproduzir')}>

        <View style={styles.containerGeral}>

          <Image style={styles.fotoMusica} source={require('../src/music.png')} />

          <View style={styles.containerNomeMusica}>
            <Text style={styles.textNomeMusica}>Ekballo</Text>
          </View>

          <View style={styles.containerNomeMusico}>
            <Text style={styles.textNomeMusico}>{"\n"}Alexandro Vilas Boas</Text>
          </View>

          <View style={styles.containerTempMusica}>
            <Text style={styles.textTempMusica}>3:23</Text>
          </View>

        </View>
        
      </TouchableOpacity>

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
  btnMusicaR: {
    marginTop: -600,
  },
  containerGeral: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 45,
  },
  containerNomeMusica: {
    left: 20,
    bottom: 10,
  },
  textNomeMusica: {
    color: '#fff',
  },
  containerNomeMusico: {
    right: 25,
    top: 3,
  },
  textNomeMusico: {
    color: '#fff',
    fontWeight: '100',
  },
  containerTempMusica: {
    left: 90,
  },
  textTempMusica: {
    color: '#fff',
  },
});