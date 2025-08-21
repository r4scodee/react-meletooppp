import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { auth } from "./firebaseConfig";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan Password wajib diisi");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sukses", "Akun berhasil dibuat!");
      router.push("/login"); // ke login setelah register
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username (Email)"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By clicking this button, you agree with our{" "}
          <Text style={styles.link}>Terms and Conditions</Text>
        </Text>
      </View>

      {/* Social login dummy */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text>🔵 Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text>🔷 Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => router.push("/login")}
        >
          Sign in
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F6FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2EA7FF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  terms: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  footerText: {
    fontSize: 14,
    color: "#555",
  },
  link: {
    color: "#2EA7FF",
    fontWeight: "600",
  },
});
