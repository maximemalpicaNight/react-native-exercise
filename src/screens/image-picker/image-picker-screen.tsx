import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useImagePickerScreenLogic } from './image-picker-screen.logic';
import { styles } from './image-picker-screen.styles';

export default function ImagePickerScreen() {
    const { image, pickImage, goBack } = useImagePickerScreenLogic();

    return (
        <SafeAreaView style={styles.globalContainer}>
            <View style={styles.viewContainer}>
                <Pressable onPress={pickImage} style={styles.button}>
                    <Text style={styles.button}>Pick image</Text>
                </Pressable>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={goBack} style={styles.button}>
                    <Text style={styles.button}>Go back to menu</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
