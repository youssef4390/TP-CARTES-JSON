import React from 'react';
import { View, Text, Image, StyleSheet,Button } from 'react-native';//importation des composants nécessaires de react-native

// export par défaut
export default function CardItem({ title, description, image }) {//cette fonction reçoit des props: title, description et image et ce lance par défaut
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        <Button title="Voir plus" onPress={() => alert(title)} color="#192634ff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3, // ombre Android
  },
  cover: { width: '100%', height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  desc: { color: '#555' }
});


