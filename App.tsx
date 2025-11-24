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
  const [activeTab, setActiveTab] = useState("Home"); // Home | Community | Journal | Contacts | Features | About

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("Home");
  };

  if (!isLoggedIn) {
    return <AuthScreen onAuthSuccess={() => setIsLoggedIn(true)} />;
  }

  let ScreenComponent = HomeScreen;
  if (activeTab === "Home") ScreenComponent = HomeScreen;
  if (activeTab === "Community") ScreenComponent = CommunityScreen;
  if (activeTab === "Journal") ScreenComponent = JournalScreen;
  if (activeTab === "Contacts") ScreenComponent = ContactsScreen; 
  if (activeTab === "Features") ScreenComponent = FeaturesScreen;
  if (activeTab === "About") ScreenComponent = AboutScreen;


return (
  <SafeAreaView style={styles.appContainer}>

    {/* NAVBAR AT THE TOP */}
    <NavBar
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={handleLogout}
    />

    <View style={styles.screenWrapper}>
      <ScreenComponent />
    </View>

  </SafeAreaView>
);


}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
});
