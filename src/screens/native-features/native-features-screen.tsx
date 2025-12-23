import { CameraView } from 'expo-camera';
import { Button, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNativeFeaturesScreenLogic } from './native-features-screen.logic';
import { styles } from './native-features-screen.styles';

export default function NativeFeaturesScreen() {
    const {
        permission,
        requestPermission,
        cameraRef,
        takePicture,
        goBack
    } = useNativeFeaturesScreenLogic();

    if (!permission) {
        return <Text>Chargement...</Text>;
    }

    return (
        <SafeAreaView style={styles.globalContainer} edges={['bottom']}>
            
            <View style={styles.buttonContainer}>
                <Pressable onPress={goBack} style={styles.button}>
                    <Text>Go back to menu</Text>
                </Pressable>
            </View>

            {!permission.granted ? (
                <View style={styles.permissionContainer}>
                    <Text>pas de permission</Text>
                    <Button title="authorize" onPress={requestPermission} />
                </View>
            ) : (
                <CameraView ref={cameraRef} style={styles.cameraContainer} />
            )}

            {permission.granted && (
                <View style={styles.buttonPictureContainer}>
                    <Button title="take" onPress={takePicture} />
                </View>
            )}

        </SafeAreaView>
    );
}
