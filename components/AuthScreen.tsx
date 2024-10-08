// components/AuthScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import axios from "axios";
import Footer from "./Footer";

const AuthScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Track if in Register mode

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log("Token:", response.data.token);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Login failed", error.response?.data || "An error occurred");
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      console.log("Registration successful:", response.data);
      Alert.alert("Registration successful! Please log in.");
      setIsRegistering(false); // Switch back to Login mode
    } catch (error) {
      Alert.alert(
        "Registration failed",
        error.response?.data || "An error occurred"
      );
    }
  };

  return (
    <>
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Authentication</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>
          {isRegistering ? "Register" : "Login"}
        </Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Pressable
          onPress={isRegistering ? handleRegister : handleLogin}
          style={styles.button}
        >
          <Text style={styles.text}>
            {isRegistering ? "Register" : "Login"}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setIsRegistering(!isRegistering)}
          style={styles.switchButton}
        >
          <Text style={styles.switchText}>
            {isRegistering
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Text>
        </Pressable>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#6200EE",
  },
  switchButton: {
    marginTop: 10,
    alignItems: "center",
  },
  switchText: {
    color: "#6200EE",
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default AuthScreen;
