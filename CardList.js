import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardItem from './CardItem';

// import du JSON local
import cards from '../data/cards.json';//importation des données JSON 

// export nommé
export function CardList() {
  const renderItem = ({ item }) => (//fonction pour rendre chaque élément de la liste
    <CardItem
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList //composant FlatList pour afficher une liste performante 
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
