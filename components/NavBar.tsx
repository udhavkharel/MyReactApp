// components/NavBar.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const tabs = ["Home", "Community", "Journal", "Contacts", "Features", "About"];

type NavBarProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
};

export default function NavBar({
  activeTab,
  onTabChange,
  onLogout,
}: NavBarProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabRow}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => onTabChange(tab)}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 18,      // ⬅️ fixes notch spacing
    paddingBottom: 10,
    backgroundColor: "transparent",
    zIndex: 999,
  },

  navContainer: {
    backgroundColor: "#0F1828",
    paddingVertical: 10, // ⬅️ was 50 — causing notch overlap
    paddingHorizontal: 10,

    borderRadius: 16,
    marginHorizontal: 18,
    marginBottom: 12,

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },

    zIndex: 999, // ensure clicks work
  },

  tabRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tab: {
    paddingVertical: 8,  // ⬅️ reduced for cleaner height
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
  },

  activeTab: {
    backgroundColor: "#F5A623",
  },

  tabText: {
    color: "#E0E4F0",
    fontSize: 14,
    fontWeight: "500",
  },

  activeTabText: {
    color: "#111827",
    fontWeight: "700",
  },

  logoutBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#FF4B5C",
    marginLeft: 10,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "700",
  },
});
