import AccountScreen from '@/src/screens/account/account-screen';
import { Link, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';


export default function IndexScreen() {
  
  const router= useRouter()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Link href="/exercise/todos">
            <Text style={{color: 'white'}}>Todos</Text>
        </Link>
        <Link href="/exercise/profile">
            <Text style={{color: 'white'}}>Profile</Text>
        </Link>
        <Link href="/exercise/social-feed">
            <Text style={{color: 'white'}}>Social feed</Text>
        </Link>
        <Link href="/native-features">
            <Text style={{color: 'white'}}>Native Features</Text>
        </Link>
        <Pressable onPress={() => router.push('/native-features')}>
          <Text style={{color: 'white'}}>Native Features</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/image-picker')}>
          <Text style={{color: 'white'}}>Image picker</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/form-image')}>
          <Text style={{color: 'white'}}>Form Image</Text>
        </Pressable>
        <AccountScreen /> 
    </View>
  );
}