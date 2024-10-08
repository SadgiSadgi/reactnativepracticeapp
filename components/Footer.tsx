import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 My App. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#6200EE",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

export default Footer;
