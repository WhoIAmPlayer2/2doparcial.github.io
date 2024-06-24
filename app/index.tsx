import { ScrollView, StyleSheet, View } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Nombre } from "./components/Nombre";
import { Edad } from "./components/Edad";
import { Menu } from "./components/Menu";
import { Sensors } from "./components/Sensors";
import GlobalStyles from "@/constants/GlobalStyles";
import Bar from "./components/Bar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={GlobalStyles.indexcontainer}>
      {/* Opcionalmente pasar prop "name" */}
      <HomeScreen />
      <Counter />
      <View>
      <Link href="/about">hola</Link>
      {/* ...other links */}
      <Link href="/user/bacon">View user</Link>
    </View>
      {/* <Bar /> */}
      <View>
          <Nombre />
          <Edad />
      </View>
      <Menu />
      <Sensors />
    </ScrollView>
  );
}
