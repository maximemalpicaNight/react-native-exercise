import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef } from 'react';

export function useNativeFeaturesScreenLogic() {
    
    // Attributs
    const router = useRouter();
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);

    // Functions
    async function takePicture() {
        if (!cameraRef.current) return
        const photo = await cameraRef.current.takePictureAsync();
    }

    function goBack() {
        router.push('/');
    }

    return {
        permission,
        requestPermission,
        cameraRef,
        takePicture,
        goBack,
    };
}
