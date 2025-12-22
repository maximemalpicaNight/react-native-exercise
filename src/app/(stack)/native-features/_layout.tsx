import { Stack } from 'expo-router';

export default function NativeFeaturesLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ 
                title: 'Native Features'
            }}  />
        </Stack>
    )
    
}