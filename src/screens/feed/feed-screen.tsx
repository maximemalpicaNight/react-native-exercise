import { useNavigation } from '@react-navigation/native';
import { FlashList } from "@shopify/flash-list";
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedCard from "./components/feed-card/feed-card";


export default function FeedScreen() {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [descritpion, setDescription] = useState("")

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
                    <View onTouchEnd={() => navigation.navigate('PostDetails', { post: item })}>
                        <FeedCard username={item.username} profilePicture={item.profilePictue} image={item.image} post={item.post} />
                    </View>
                )}
            />
            <Pressable
                style={styles.createButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Create post</Text>
            </Pressable>

                
            <Modal
                visible={modalVisible}
                transparent={false}
                animationType="slide"
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{flex:1, padding:10 }}>

                        <View>
                            <TextInput
                                onChangeText={setDescription}
                                value={descritpion}
                                placeholder="Description"
                                style={{backgroundColor:"#f1f1f1", padding:10, borderRadius: 10 }}
                            />
      
                        </View>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <Pressable
                            style={styles.backButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.buttonText}>Go back to post</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </ Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    createButton: {
        backgroundColor: "#6144efff",
        paddingVertical: 22,
        alignItems: "center",
    },
    backButton: {
        backgroundColor: "#6144efff",
        paddingVertical: 22,
        alignItems: "center",
        width: "90%",
        borderRadius:20,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    }
})