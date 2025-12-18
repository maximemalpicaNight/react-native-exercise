import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{color: 'white'}}>Index.tsx</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: 'blue',
  }
});
