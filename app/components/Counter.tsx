import GlobalStyles from "@/constants/GlobalStyles";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <View>
      <Text style={GlobalStyles.countercounterText}>Contador: {count}</Text>
      <View style={GlobalStyles.counterbuttonscontainers}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={GlobalStyles.counterdecrementButton}
        >
          <Text style={GlobalStyles.counterbuttonText}>Decrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleIncrement}
          style={GlobalStyles.counterincrementButton}
        >
          <Text style={GlobalStyles.counterbuttonText}>Incrementar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

