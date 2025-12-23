import { Image } from "expo-image";
import { Text, View } from "react-native";
import { styles } from "./feed-card.styles";
import { FeedCardProps } from "./feed-card.types";

export default function FeedCard({username, profilePicture, image, post}: FeedCardProps) {

    return (
        <View style={styles.container}>
            <View style={styles.userContainer} >
                <Image source={profilePicture} style={styles.imageProfilePicture} />
                <Text style={styles.text}>{username}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.imagePost} />
            </View>
            <View>
                <Text style={styles.post}>{post}</Text>
            </View>
            <View style={styles.divider}></View>
        </View>
    )
}

