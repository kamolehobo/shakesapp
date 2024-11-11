import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import shakesData from './shakes.json';

const ShakeCard = ({ shake }) => (
  <Card style={styles.card}>
    <Card.Title title={shake.name} />
    <Card.Content>
      <Text>Calories: {shake.calories} kcal</Text>
      <Text>Protein: {shake.protein}</Text>
      <Text>Carbs: {shake.carbs}</Text>
      <Text>Fat: {shake.fat}</Text>
      <Text>Ingredients:</Text>
      {shake.ingredients.map((ingredient, index) => (
        <Text key={index}>• {ingredient}</Text>
      ))}
    </Card.Content>
  </Card>
);

const App = () => {
  const [shakes, setShakes] = useState([]);

  useEffect(() => {
    setShakes(shakesData);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={shakes}
        renderItem={({ item }) => <ShakeCard shake={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginVertical: 10,
  },
});

export default App;
