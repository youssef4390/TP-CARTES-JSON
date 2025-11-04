import React from 'react';
import { View, StatusBar, StyleSheet,Button } from 'react-native';
// import nommé depuis CardList.js
import { CardList } from './components/CardList';

export default function App() {
  return (
    < View style={styles.screen}>
      <StatusBar />
      <CardList />
      <Button title="Ajouter une carte" onPress={() => alert('ici vous pouvez ajouter une carte!')} //bouton pour ajouter une carte
/> 
     </ View >
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f6f7fb' },

  footer: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

