import * as ImagePicker from "expo-image-picker"
import { useState } from "react"
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./form-image-screen.styles"

export default function FormImageScreen() {
  const [image, setImage] = useState<string | null>(null)
  const [text, setText] = useState("")

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (!permission.granted) {
            Alert.alert("Permission")
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 1,
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

  const handleSubmit = () => {
    Alert.alert("Form Submit")
  }

  return (
    <SafeAreaView style={styles.globalContainer}>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.globalContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>

        <TouchableOpacity onPress={pickImage} style={{ marginBottom: 16 }}>
            <Text>Add Screenshot</Text>
        </TouchableOpacity>

        {image && (
            <Image
                source={{ uri: image }}
                style={styles.screenshotImage}
            />
        )}

        <TextInput
            placeholder="Form"
            value={text}
            onChangeText={setText}
        />

        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
