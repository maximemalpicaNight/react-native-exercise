import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageContainer: {
        flex:1,
        padding: 4,
    },
    imageUsername : {
        width: 50, 
        resizeMode: "cover", 
        height: 50, 
        borderRadius: 99
    },
    imagePost: {
        aspectRatio: 1/1 , 
        resizeMode: "cover"
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    post : {
        fontSize: 18,
        paddingVertical: 14,
    },
    divider: {
        borderBottomColor: "#d0d0d0",
        borderBottomWidth: 1,
    }
})