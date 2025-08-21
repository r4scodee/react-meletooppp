import { StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { Link } from "expo-router"; // 👈 import Link

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Beranda</Text>

        {/* Menu Login */}
        <Link href="/login" asChild>
          <Text style={styles.appBarTitle}>Logout</Text>
        </Link>

        {/* Menu Register */}
        <Link href="/register" asChild>
          <Text style={styles.appBarTitle}>Register</Text>
        </Link>
      </View>

      {/* Konten Utama */}
      <View style={styles.content}>
        <Text style={styles.text}>Selamat Datang di Halaman Home!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: StatusBar.currentHeight || 24,
  },
  appBar: {
    height: 56,
    backgroundColor: "#d26421",
    flexDirection: "row", // 👈 biar menu sejajar
    alignItems: "center",
    justifyContent: "space-between", // 👈 biar rata kiri-kanan
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appBarTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
