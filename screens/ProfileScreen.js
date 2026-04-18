import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen({ route, navigation }) {
  const { name, age, city } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text>Student Name: {name}</Text>
      <Text>Student age: {age}</Text>
      <Text>Student City: {city}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
});