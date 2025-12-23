import { Button, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormImageScreenLogic } from "./form-image-screen.logic";
import { styles } from "./form-image-screen.styles";

export default function FormImageScreen() {

  // Attributs
  const { image, text, setText, pickImagePress, handleSubmit } = useFormImageScreenLogic();

  // Render
  return (
    <SafeAreaView style={styles.globalContainer}>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.globalContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>

        <TouchableOpacity onPress={pickImagePress}>
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
