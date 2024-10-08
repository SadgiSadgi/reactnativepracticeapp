// components/LogoutButton.tsx
import React from "react";
import { Pressable, StyleSheet, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
  const navigation = useNavigation() as any;

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  };

  return (
    <Pressable onPress={handleLogout} style={styles.button}>
      <Text style={styles.text}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 1000,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default LogoutButton;
