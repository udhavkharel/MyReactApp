// screens/ContactsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support & Contacts</Text>
      <Text style={styles.text}>
        If you ever feel overwhelmed, please reach out to someone you trust.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>SoulLog Support (Demo)</Text>
        <Text>Email: support@soullog.app</Text>
        <Text>Website: www.soullog.app</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Local Helpline (Example)</Text>
        <Text>Phone: 116 123 (check local numbers in your country)</Text>
      </View>

      <Text style={styles.note}>
        SoulLog is not a crisis service. If you are in danger, contact local
        emergency services immediately.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  title: { fontSize: 24, fontWeight: "700" },
  text: { marginTop: 8, color: "#4B5563" },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    elevation: 2,
  },
  cardTitle: { fontWeight: "700", marginBottom: 4 },
  note: {
    marginTop: 16,
    fontSize: 12,
    color: "#9CA3AF",
  },
});
