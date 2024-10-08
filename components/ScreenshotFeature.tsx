// ScreenshotFeature.tsx
import React, { useRef, useState } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  Text,
  Alert,
  Dimensions,
  Pressable,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import Gallery from "./Gallery";

const ScreenshotFeature = () => {
  const viewRef = useRef(null);
  const [screenshotUri, setScreenshotUri] = useState<string | null>(null);

  const takeScreenshot = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
        quality: 0.8,
      });
      setScreenshotUri(uri);

      const permissionResult = await MediaLibrary.requestPermissionsAsync();
      if (permissionResult.granted) {
        await MediaLibrary.saveToLibraryAsync(uri);
        Alert.alert("Success", "Screenshot saved to your gallery!");
      } else {
        Alert.alert("Permission denied", "Could not save screenshot.");
      }

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        Alert.alert("Sharing is not available on this device.");
      }
    } catch (error) {
      console.error("Failed to take screenshot:", error);
      Alert.alert("Error", "Failed to take screenshot.");
    }
  };

  // Get device dimensions
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View
        ref={viewRef}
        style={[styles.captureArea, { width: width * 1, height: height * 0.2 }]}
      >
        <Gallery />
      </View>

      <Pressable onPress={takeScreenshot} style={styles.button}>
        <Text style={styles.buttonText}>Take Screenshot</Text>
      </Pressable>

      {screenshotUri && (
        <Image source={{ uri: screenshotUri }} style={styles.screenshot} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 0,
  },
  captureArea: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Optional: to give rounded corners
    marginBottom: 20, // To give some space between the capture area and the button
  },
  text: {
    fontSize: 18,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
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
  screenshot: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ScreenshotFeature;
