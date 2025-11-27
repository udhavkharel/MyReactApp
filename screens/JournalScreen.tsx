// screens/JournalScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function JournalScreen() {
  const [dayHighlight, setDayHighlight] = useState("");
  const [challenge, setChallenge] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [energyLevel, setEnergyLevel] = useState("");
  const [note, setNote] = useState("");

  const handleSave = () => {
    // In real app we'd send this to backend/analytics
    Alert.alert("Journal Saved", "Your reflection has been stored locally.");
    setDayHighlight("");
    setChallenge("");
    setGratitude("");
    setEnergyLevel("");
    setNote("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Today’s Reflection</Text>
      <Text style={styles.subtitle}>
        Answer a few gentle prompts. Be honest and kind to yourself.
      </Text>

      <Text style={styles.label}>1. What was the best moment of your day?</Text>
      <TextInput
        style={styles.input}
        multiline
        value={dayHighlight}
        onChangeText={setDayHighlight}
        placeholder="A conversation, a walk, a small success..."
      />

      <Text style={styles.label}>
        2. What was the most challenging part of your day?
      </Text>
      <TextInput
        style={styles.input}
        multiline
        value={challenge}
        onChangeText={setChallenge}
        placeholder="Something that felt heavy or difficult..."
      />

      <Text style={styles.label}>3. One thing you feel grateful for:</Text>
      <TextInput
        style={styles.input}
        multiline
        value={gratitude}
        onChangeText={setGratitude}
        placeholder="A person, a feeling, or a moment..."
      />

      <Text style={styles.label}>
        4. How would you rate your energy today? (0–10)
      </Text>
      <TextInput
        style={styles.input}
        value={energyLevel}
        onChangeText={setEnergyLevel}
        keyboardType="numeric"
        placeholder="e.g. 4, 7, 9..."
      />

      <Text style={styles.label}>
        5. Anything else on your mind you want to release?
      </Text>
      <TextInput
        style={[styles.input, { minHeight: 80 }]}
        multiline
        value={note}
        onChangeText={setNote}
        placeholder="Free space to write whatever you feel..."
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save Today’s Journal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 30, marginLeft: 6 },
  title: { fontSize: 24, fontWeight: "700", marginTop: 50 },
  subtitle: {
    color: "#6B7280",
    marginBottom: 12,
    fontSize: 13,
  },
  label: { fontWeight: "600", marginTop: 10, marginBottom: 4 },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    minHeight: 50,
    textAlignVertical: "top",
    elevation: 1,
  },
  saveBtn: {
    marginTop: 18,
    backgroundColor: "#F5A623",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  saveText: {
    color: "#111827",
    fontWeight: "700",
  },
});
