import PostDetailsScreen from '@/src/screens/feed/components/feed-details/feed-details';
import FeedScreen from '@/src/screens/feed/feed-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function FeedStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="FeedList" component={FeedScreen} />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}