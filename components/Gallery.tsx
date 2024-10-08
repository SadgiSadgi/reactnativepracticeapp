import React, { useState } from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  FlatList,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "You need to grant permission to access the gallery."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const newImages = result.assets.map((asset) => asset.uri);
      setSelectedImages((prev) => [...prev, ...newImages]);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={pickImage} style={styles.button}>
        <Text style={styles.text}>Pick Images from Gallery</Text>
      </Pressable>
      <FlatList
        data={selectedImages}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "lightgray",
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  image: {
    width: 100,
    //height: ,
    resizeMode: "cover",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  text: {
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
});

export default Gallery;
