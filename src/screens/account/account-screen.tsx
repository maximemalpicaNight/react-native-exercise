import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./account-screen.styles";

export default function AccountScreen() {

    return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text>Home</Text>
          </View>
          <View style={styles.containerList}>
            <Link href="/exercise/todos">
                <Text style={styles.textList}>Todos</Text>
            </Link>
            <Link href="/exercise/profile">
                <Text style={styles.textList}>Profile</Text>
            </Link>
            <Link href="/exercise/social-feed">
                <Text style={styles.textList}>Social feed</Text>
            </Link>
            <Link href="/native-features">
                <Text style={styles.textList}>Native Features</Text>
            </Link>
            <Link href="/image-picker">
              <Text style={styles.textList}>Image picker</Text>
            </Link>
            <Link href='/form-image'>
              <Text style={styles.textList}>Form Image</Text>
            </Link>
          </View>
        </SafeAreaView>
    )
}
