import { useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function FeedDetails() {
    const route = useRoute();
    const { post } = route.params;

    return (
        <View style={styles.container}>
            <Link href={`/exercise/social-feed/${post.username}`} style={styles.userContainer} >
                <Image source={post.profilePicture} style={{width: 50, resizeMode: "cover", height: 50, borderRadius: 99} } />
                <Text style={styles.text}>{post.username}</Text>
            </Link>
            <View style={styles.imageContainer}>
                <Image source={post.image} style={{aspectRatio: 1/1 , resizeMode: "cover"} } />
            </View>
            <View>
                <Text style={styles.post}>{post.post}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageContainer: {
        flex:1,
        padding: 4,
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    post : {
        fontSize: 18,
        paddingVertical: 14,
    },
    divider: {
        borderBottomColor: "#d0d0d0",
        borderBottomWidth: 1,
    }
})