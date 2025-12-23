import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { useFeedDetailsLogic } from './feed-details.logic';
import { styles } from './feed-details.styles';

export default function FeedDetails() {

    const { post } = useFeedDetailsLogic();

    return (
        <View style={styles.container}>
            <Link href={`/exercise/social-feed/${post.username}`} style={styles.userContainer} >
                <Image source={post.profilePicture} style={styles.imageUsername} />
                <Text style={styles.text}>{post.username}</Text>
            </Link>
            <View style={styles.imageContainer}>
                <Image source={post.image} style={styles.imagePost} />
            </View>
            <View>
                <Text style={styles.post}>{post.post}</Text>
            </View>
        </View>
    );
}
