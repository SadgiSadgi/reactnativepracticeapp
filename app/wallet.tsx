import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import { Link } from "expo-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Add in the useWalletConnectModal hook

const projectId = "0185719dac05f7e09434b552de8489f0";

const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function Index() {
  const { open, isConnected, address, provider } = useWalletConnectModal();

  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>WalletConnect Application</Text>
        <Text>{isConnected ? address : "No Connected"}</Text>
        <Pressable onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.text}>
            {isConnected ? "Disconnect" : "Connect"}
          </Text>
        </Pressable>

        <WalletConnectModal
          projectId={projectId}
          providerMetadata={providerMetadata}
        />
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
