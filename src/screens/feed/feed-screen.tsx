import { FlashList } from "@shopify/flash-list";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedCard from "./components/feed-card/feed-card";
import { useFeedScreenLogic } from "./feed-screen.logic";
import { styles } from './feed-screen.styles';

export default function FeedScreen() {
  const {
    posts,
    modalVisible,
    description,
    handlePostOnTouchEnd,
    handleOpenModalPress,
    handleCloseModalPress,
    handleDescriptionChange,
  } = useFeedScreenLogic();

  return (
    <View style={styles.container}>
      <FlashList
        data={posts}
        renderItem={({ item }) => (
          <View onTouchEnd={handlePostOnTouchEnd(item)}>
            <FeedCard
              username={item.username}
              profilePicture={item.profilePictue}
              image={item.image}
              post={item.post}
            />
          </View>
        )}
      />

      <Pressable style={styles.createButton} onPress={handleOpenModalPress}>
        <Text style={styles.buttonText}>Create post</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent={false}
        animationType="slide"
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                onChangeText={handleDescriptionChange}
                value={description}
                placeholder="Description"
              />
            </View>
          </View>

          <View>
            <Pressable style={styles.backButton} onPress={handleCloseModalPress}>
              <Text style={styles.buttonText}>Go back to post</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
