import Constants from 'expo-constants';
import { Text, View } from "react-native";

export default function AppConfigScreen() {

    return (
        <View>
            <Text>Environnement : {Constants.expoConfig?.extra?.environment}</Text>
        </View>
    )
}