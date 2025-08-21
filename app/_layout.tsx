import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { ActivityIndicator, View } from "react-native";
import React from "react";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        // kalau login → masuk tab
        <Stack.Screen name="(tabs)" />
      ) : (
        // kalau belum login → pilih login/register
        <>
          <Stack.Screen name="/login" />
        </>
      )}
    </Stack>
  );
}
