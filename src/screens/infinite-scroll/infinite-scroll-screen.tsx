import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import InfiniteScrollCard from "./components/infinite-scroll-card/infinite-scroll-card";
import { useInfiniteScrollScreen } from "./infinite-scroll-screen.logic";
import { styles } from "./infinte-scroll-screen.styles";

export default function InfiniteScrollScreen() {

    // Attributs
    const { list } = useInfiniteScrollScreen();

    // Render
    return (
        <View style={styles.globalContainer}>
            <View style={styles.flashListContainer}>
                <FlashList
                    data={list}
                    renderItem={({ item }) => (
                        <InfiniteScrollCard profilePicture={item.profilePictue}  username={item.username} status={item.status}  />
                    )}
                />
            </View>
        </View> 
    )
}
