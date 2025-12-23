import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";

export function useFormImageScreenLogic() {
    
  // Attributs
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("");

  // Functions
  function pickImagePress() {
    ImagePicker.requestMediaLibraryPermissionsAsync()
      .then(function (permission) {
        if (!permission.granted) {
          Alert.alert("Permission refusée");
          return;
        }
        return ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
        });
      })
      .then(function (result) {
        if (result && !result.canceled) {
          setImage(result.assets[0].uri);
        }
    });
  }

  function handleSubmit() {
    Alert.alert("Form Submit", `Texte: ${text}\nImage: ${image || "Aucune"}`);
  }

  return {
    image,
    text,
    setText,
    pickImagePress,
    handleSubmit,
  };
}
