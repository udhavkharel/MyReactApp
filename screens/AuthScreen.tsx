// screens/AuthScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";

export default function AuthScreen({ onAuthSuccess }: { onAuthSuccess: () => void }) {

  const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }
    // no backend, so just "success"
    onAuthSuccess();
  };

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all signup fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    Alert.alert("Welcome to SoulLog!", "Account created locally (no backend).");
    onAuthSuccess();
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert("Forgot Password", "Enter your email first.");
      return;
    }
    Alert.alert(
      "Forgot Password",
      "In a real app we would send a reset link to: " + email
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#0F172A" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>SoulLog</Text>
        <Text style={styles.subtitle}>Write. Reflect. Rise.</Text>

        {/* Toggle Buttons */}
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[styles.toggleBtn, mode === "login" && styles.toggleActive]}
            onPress={() => setMode("login")}
          >
            <Text
              style={[
                styles.toggleText,
                mode === "login" && styles.toggleTextActive,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleBtn, mode === "signup" && styles.toggleActive]}
            onPress={() => setMode("signup")}
          >
            <Text
              style={[
                styles.toggleText,
                mode === "signup" && styles.toggleTextActive,
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* LOGIN FORM */}
        {mode === "login" && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Welcome back</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
              <Text style={styles.primaryText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* SIGNUP FORM */}
        {mode === "signup" && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Create your SoulLog</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#9CA3AF"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.primaryBtn} onPress={handleSignup}>
              <Text style={styles.primaryText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    fontSize: 36,
    fontWeight: "800",
    color: "#F5A623",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#E5E7EB",
    marginBottom: 24,
  },
  toggleRow: {
    flexDirection: "row",
    backgroundColor: "#111827",
    borderRadius: 999,
    padding: 4,
    marginBottom: 20,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 999,
    alignItems: "center",
  },
  toggleActive: {
    backgroundColor: "#F5A623",
  },
  toggleText: {
    color: "#9CA3AF",
    fontWeight: "600",
  },
  toggleTextActive: {
    color: "#111827",
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: "#F9FAFB",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#1F2937",
    borderRadius: 10,
    padding: 12,
    color: "#F9FAFB",
    marginBottom: 12,
  },
  forgotText: {
    color: "#93C5FD",
    textAlign: "right",
    marginBottom: 14,
  },
  primaryBtn: {
    backgroundColor: "#F5A623",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  primaryText: {
    fontWeight: "700",
    color: "#111827",
  },
});
