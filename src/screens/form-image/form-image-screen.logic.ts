import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";

export function useFormImageScreenLogic() {
    
    // Attributs
    const [image, setImage] = useState<string | null>(null);
    const [text, setText] = useState("");

    // Functions
    async function pickImagePress() {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (!permission.granted) {
            Alert.alert("Permission refusée");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (result && !result.canceled) {
            setImage(result.assets[0].uri);
        }
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
