import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function FeedCard({username, profilePicture, image, post}: {username: string, profilePicture:string, image:string, post:string}) {

    return (
        <View style={styles.container}>
            <View style={styles.userContainer} >
                <Image source={profilePicture} style={{width: 50, resizeMode: "cover", height: 50, borderRadius: 99} } />
                <Text style={styles.text}>{username}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={image} style={{aspectRatio: 1/1 , resizeMode: "cover"} } />
            </View>
            <View>
                <Text style={styles.post}>{post}</Text>
            </View>
            <View style={styles.divider}></View>
        </View>
    )
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
        gap: 10,
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