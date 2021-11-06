import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function pastas({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.containerFolders}>

        <TouchableOpacity style={styles.btnFolders} onPress={() => navigation.navigate('Musicas')}>
          <Image source={require('../src/folder.png')} />
        </TouchableOpacity>

        <Text style={styles.nomePasta}>Download</Text>

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
  btnFolders: {
    width: 123,
    height: 117,
    backgroundColor: '#0D1A25',
    shadowOpacity: 1,
    shadowColor: '#000',
    borderRadius: 25,
    alignItems: "center",
    justifyContent: 'center',
  },
  containerFolders:{
    alignItems: 'center',
    marginTop: -500,
    marginRight: 200,
  },
  nomePasta:{
    color: '#fff',
    marginTop: 5,
  },
});