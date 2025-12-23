import { Stack, useRouter } from 'expo-router';

export default function TodosLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: { backgroundColor: '#000000' }, 
        headerStyle: { backgroundColor: '#000000' },
        headerTitleStyle: { color: '#ffffff' }
      }}
    >
        <Stack.Screen name="index" options={{ title: '' }} />
        <Stack.Screen name="todos" options={{ title: 'Menu' }} />
        <Stack.Screen name="social-feed" options={{ title: 'Social feed' }} />
    </Stack>
  );
}