import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalContainer: {
        paddingVertical: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 99,
        resizeMode: "cover",
    },
    userText: {
        color: "black",
        fontWeight: "bold",
    },
    status: {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#f1f1f1",
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
});