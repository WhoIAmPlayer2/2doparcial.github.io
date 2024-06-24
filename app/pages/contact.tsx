import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Contacto",
        }}
      />
      <Text style={styles.title}>Información de Contacto</Text>
      <Text style={styles.info}>Nombre: Miguel Angel Cruz Castillo</Text>
      <Text style={styles.info}>Teléfono: 8122538191</Text>
      <Text style={styles.info}>Email: mickyangelamgel@gmail.com</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});
