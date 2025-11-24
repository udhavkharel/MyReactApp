// screens/FeaturesScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FeaturesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Features</Text>
      <Text style={styles.subtitle}>What SoulLog plans to offer:</Text>

      <View style={styles.card}>
        <Text style={styles.bullet}>• Mood tracking with gentle visuals</Text>
        <Text style={styles.bullet}>• Weekly reflection summaries</Text>
        <Text style={styles.bullet}>• Anonymous community sharing</Text>
        <Text style={styles.bullet}>• Smart prompts based on your patterns</Text>
        <Text style={styles.bullet}>• Private, encrypted journal storage</Text>
      </View>

      <Text style={styles.note}>
        This demo is front-end only. Future versions can connect to a secure
        backend and AI engine for deeper insights.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  title: { fontSize: 24, fontWeight: "700" },
  subtitle: { marginTop: 4, color: "#6B7280" },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    elevation: 2,
  },
  bullet: { marginBottom: 4, color: "#374151" },
  note: {
    marginTop: 14,
    fontSize: 12,
    color: "#9CA3AF",
  },
});
