import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LogoutButton from "./LogoutButton";
import { Link } from "expo-router";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBar}>
        <Link href={"/home" as any}>
          <Text style={styles.title}>My App</Text>
        </Link>
        <Link href={"/wallet" as any}>
          <Text style={styles.title}>Wallet</Text>
        </Link>
        <Link href={"/about" as any}>
          <Text style={styles.title}>About</Text>
        </Link>
      </View>
      <LogoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  leftBar: {
    display: "flex",
    marginRight: 40,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
});

export default Header;
