import AccountScreen from '@/src/screens/account/account-screen';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function IndexScreen() {
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
        <AccountScreen /> 
    </View>
  );
}