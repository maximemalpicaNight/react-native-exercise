import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import InfiniteScrollCard from "./components/infinite-scroll-card/infinite-scroll-card";
import { useInfiniteScrollScreenLogic } from "./infinite-scroll-screen.logic";
import { styles } from "./infinte-scroll-screen.styles";

type Item = {
    username: string;
    profilePictue: string;
    status: string;
};

export default function InfiniteScrollScreen() {

    // Attributs
    const { list } = useInfiniteScrollScreenLogic();

    // Function
    function renderItem({ item }: { item: Item }) {
        return (
            <InfiniteScrollCard
                profilePicture={item.profilePictue}
                username={item.username}
                status={item.status}
            />
        );
    }

    // Render
    return (
        <View style={styles.globalContainer}>
            <View style={styles.flashListContainer}>
                <FlashList
                    data={list}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
}
