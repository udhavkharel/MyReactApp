// screens/AboutScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About SoulLog</Text>
      <Text style={styles.text}>
        SoulLog was imagined as a quiet corner of the internet where people can
        process their feelings without pressure or judgment.
      </Text>
      <Text style={styles.text}>
        Instead of loud notifications, fast feeds, and endless scrolling,
        SoulLog focuses on slow reflection, emotional awareness, and gentle
        growth.
      </Text>
      <Text style={styles.text}>
        This prototype is built with React Native and can later be extended with
        AI-powered insights, therapist integration, and secure cloud storage.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50, marginLeft: 6,},
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8,  textAlign: 'center' },
  text: { marginBottom: 8, color: "#374151" },
});
