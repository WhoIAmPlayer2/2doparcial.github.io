import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222",
        },
        headerTintColor: "#FFF", 
      }}
    />
  );
}
