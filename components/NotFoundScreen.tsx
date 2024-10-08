// components/NotFoundScreen.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotFoundScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>404 Not Found</Text>
      <Text>The page you are looking for does not exist.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default NotFoundScreen;
