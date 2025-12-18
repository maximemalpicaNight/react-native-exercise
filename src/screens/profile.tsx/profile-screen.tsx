import { Image, StyleSheet, Text, View } from "react-native"

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.image}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7-_LAIJnoYvHdeiOPb36oMvUGSMn6xYrcg&s",
            }}
            style={styles.avatar}
          />
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
            This is nightborn profile page. 
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>80</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingHorizontal: "10%",
    paddingTop: "5%",
  },

  image: {
    alignItems: "center",
    marginBottom: "6%",
  },

  avatarContainer: {
    width: "40%",
    aspectRatio: 1,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  bioContainer: {
    marginBottom: "6%",
  },

  bioText: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap:"10%",
    paddingHorizontal: "10%",
  },

  statItem: {
    alignItems: "center",
  },

  statNumber: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#e0e0e0",
    fontSize: 16,
  },
})
