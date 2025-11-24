// screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to SoulLog</Text>
      <Text style={styles.tagline}>Your safe space to reflect and grow.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Why SoulLog?</Text>
        <Text style={styles.body}>
          SoulLog is a gentle journaling companion designed for introverts and
          emotionally sensitive people. Capture your daily experiences, track
          your moods, and see patterns over time.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>What you can do here</Text>
        <Text style={styles.body}>• Write about your day in Journal.</Text>
        <Text style={styles.body}>• Share anonymous thoughts in Community.</Text>
        <Text style={styles.body}>• Reflect on your highs, lows, and patterns.</Text>
        <Text style={styles.body}>• Build a habit of emotional self-care.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  },
  tagline: {
    marginTop: 4,
    marginBottom: 12,
    fontSize: 14,
    color: "#6B7280",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: "700",
    marginBottom: 6,
    fontSize: 16,
  },
  body: {
    color: "#4B5563",
    marginBottom: 2,
  },
});
