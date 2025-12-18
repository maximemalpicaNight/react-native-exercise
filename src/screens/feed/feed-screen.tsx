import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import FeedCard from "./components/feed-card/feed-card";

export default function FeedScreen() {

    // Ici avec safeareaview ça fait une marge au dessus. pourquoi ?

    const posts = [
        {username: "Jojo", profilePictue: "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw", post: "Hello world 1", image: "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg"},
        {username: "Gogo", profilePictue: "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw", post: "Hello world 2", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"},
        {username: "Bobo", profilePictue: "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw", post: "Hello world 3", image: "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg"},
        {username: "Momo", profilePictue: "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw", post: "Hello world 4", image: "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg"},
    ]

    return (
        <View style={styles.container}>
            <FlashList
                data={posts}
                renderItem={({ item }) => (
                    <FeedCard username={item.username} profilePicture={item.profilePictue} image={item.image} post={item.post} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})