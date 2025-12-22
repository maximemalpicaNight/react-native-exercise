import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './native-features-screen.styles';

export default function NativeFeaturesScreen() {
    const router = useRouter();
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);

    if (!permission) {
        return <Text>Chargement...</Text>;
    }

    async function takePicture() {
        const photo = await cameraRef.current.takePictureAsync();
    };

    return (
        <SafeAreaView style={styles.globalContainer} edges={['bottom']}>
            
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => router.push('/')} style={styles.button}>
                    <Text>Go back to menu</Text>
                </Pressable>
            </View>

            {!permission.granted ? (
                <View style={styles.permissionContainer}>
                    <Text>pas de permission</Text>
                    <Button title="authorize" onPress={requestPermission} />
                </View>
            ) : (
                <CameraView ref={cameraRef} style={{ flex: 1 }} />
            )}

            {permission.granted && (
                <View style={styles.buttonPictureContainer}>
                    <Button title="take" onPress={takePicture} />
                </View>
            )}

        </SafeAreaView>
    );
}