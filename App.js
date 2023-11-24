import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const snacks = [
  { id: '1', nome: 'Chocolate' },
  { id: '2', nome: 'Batata chips' },
  { id: '3', nome: 'Tapioca' },
  { id: '4', nome: 'Pipoca' },
  { id: '5', nome: 'Sorvete' },
  { id: '6', nome: 'Açaí' },
  { id: '7', nome: 'Bombom' },
  { id: '8', nome: 'Arroz' },
  { id: '9', nome: 'Fiação de cobre' },
];

const SnackList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itens}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de compras</Text>
      <FlatList
        data={snacks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'gold',
  },
  itens: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 'center'
  },
});

export default SnackList;
