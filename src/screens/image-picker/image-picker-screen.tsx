import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./image-picker-screen.styles";

export default function ImagePickerScreen() {

    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert('Permission required');
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const router = useRouter()

    return (
        <SafeAreaView style={styles.globalContainer}>
            <View style={styles.viewContainer}>
                <Pressable onPress={pickImage} style={styles.button}>
                    <Text style={styles.button}>Pick image</Text>
                </Pressable>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => router.push('/')} style={styles.button}>
                    <Text style={styles.button}>Go back to menu</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}