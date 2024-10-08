import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutScreen() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>About screen</Text>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});
