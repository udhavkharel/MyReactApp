// screens/CommunityScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const mockPosts = [
  {
    id: "1",
    name: "Anonymous Leaf",
    mood: "Grateful",
    text: "Today I finally spoke up for myself in class. Small win, but I feel proud.",
    time: "2h ago",
  },
  {
    id: "2",
    name: "Soft Echo",
    mood: "Overwhelmed",
    text: "So many tasks… I wrote them down and tackled just three. It helped a bit.",
    time: "5h ago",
  },
  {
    id: "3",
    name: "Quiet Star",
    mood: "Hopeful",
    text: "Had a long walk alone. Realized I am healing slowly, and that’s okay.",
    time: "Yesterday",
  },
];

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community</Text>
      <Text style={styles.subtitle}>
        Anonymous reflections from people just like you.
      </Text>

      <FlatList
        data={mockPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.mood}>Mood: {item.mood}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 24, fontWeight: "700", marginTop: 50, marginLeft: 6 },
  subtitle: {
    color: "#6B7280",
    marginBottom: 8,
    fontSize: 13,
  },
  postCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    elevation: 2,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: { fontWeight: "700", fontSize: 14 },
  time: { color: "#9CA3AF", fontSize: 12 },
  mood: { fontWeight: "600", marginBottom: 4, color: "#4B5563" },
  text: { color: "#374151" },
});
