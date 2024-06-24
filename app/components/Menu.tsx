import GlobalStyles from "@/constants/GlobalStyles";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export const Menu = () => {
  return (
    <View>
      <Text style={GlobalStyles.MenuheaderTitle}>Menu</Text>
      <Link style={GlobalStyles.Menulink} href="/pages/about">
        About
      </Link>
      <Link style={GlobalStyles.Menulink} href="/pages/contact">
        Contact
      </Link>
      <Link style={GlobalStyles.Menulink} href="/pages/location">
        Location
      </Link>
    </View>
  );
};