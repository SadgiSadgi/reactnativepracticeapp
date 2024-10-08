// components/HomeScreen.tsx
import React from "react";
import { View, Text, Button, StyleSheet, Share, Alert } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScreenshotFeature from "../components/ScreenshotFeature"; // Make sure the path is correct

const HomeScreen = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to the Home Screen!</Text>
        <ScreenshotFeature />
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
