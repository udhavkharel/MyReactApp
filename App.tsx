// App.js
import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import JournalScreen from "./screens/JournalScreen";
import ContactsScreen from "./screens/ContactsScreen";
import FeaturesScreen from "./screens/FeaturesScreen";
import AboutScreen from "./screens/AboutScreen";
import NavBar from "./components/NavBar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("Home");
  };

  if (!isLoggedIn) {
    return <AuthScreen onAuthSuccess={() => setIsLoggedIn(true)} />;
  }

  // Select Screen
  let ScreenComponent = HomeScreen;
  if (activeTab === "Community") ScreenComponent = CommunityScreen;
  if (activeTab === "Journal") ScreenComponent = JournalScreen;
  if (activeTab === "Contacts") ScreenComponent = ContactsScreen;
  if (activeTab === "Features") ScreenComponent = FeaturesScreen;
  if (activeTab === "About") ScreenComponent = AboutScreen;

 return (
  <SafeAreaView style={styles.appContainer}>

    {/* 🔥 SCREEN FIRST */}
    <View style={styles.screenWrapper}>
      <ScreenComponent />
    </View>

    {/* 🔥 NAVBAR AT BOTTOM BUT FLOATING ABOVE GESTURE BAR */}
    <View style={styles.navWrapper}>
      <NavBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      />
    </View>

  </SafeAreaView>
);

}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#FFF8E7",
  },

  navWrapper: {
    zIndex: 9999,         // 🔥 FIX: makes navbar clickable
    elevation: 20,        // for Android
    backgroundColor: "transparent",
  },

  screenWrapper: {
    flex: 1,
    marginTop: 10,
  },
});
