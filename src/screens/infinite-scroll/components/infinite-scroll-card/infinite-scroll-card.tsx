import { Image } from "expo-image";
import { Text, View } from "react-native";
import { styles } from "./infinite-scroll-card.styles";
import { InfiniteScrollCardProps } from "./infinite-scroll-card.types";

export default function InfiniteScrollCard({profilePicture, username, status}: InfiniteScrollCardProps) {
    
    return (
        <View style={styles.globalContainer}>
            <View style={styles.userContainer}>
                <Image source={profilePicture} style={styles.userImage} />
                <Text style={styles.userText}>{username}</Text>
            </View>
            <Text style={styles.status}>{status}</Text>
        </View>
    )
}