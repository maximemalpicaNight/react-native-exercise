import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TodosScreen() {
  const router = useRouter();

  const todos = [
    "Main pages",
    "Services",
    "Catalogue",
    "Dashboard",
    "Our offer",
    "Settings",
    "Helpdesk",
    "Logout",
  ];

  return (
    <View style={styles.container}>
      <FlashList
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item}</Text>
        )}
      />
      <Pressable
        style={styles.button}
        onPress={() => router.push("/exercise")}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  text: {
    fontSize: 16,
    paddingLeft: 30,
    paddingBottom: 20,
    marginBottom: 24,
    color: "white",
  },

  button: {
    backgroundColor: "#2181ff",
    paddingVertical: 14,
    marginHorizontal: 40,
    marginBottom: 40,
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
});

