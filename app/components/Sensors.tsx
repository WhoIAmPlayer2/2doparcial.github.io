import { Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import { useEffect, useState } from "react";

export const Sensors = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Accelerometer.addListener((accelerometerData) => {
      console.log(accelerometerData);
      setData(accelerometerData);
    });
    Accelerometer.setUpdateInterval(1000);
    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  return (
    <View>
      Sensors
      <view>
        <Text>{data.x}</Text>
        <Text>{data.y}</Text>
        <Text>{data.z}</Text>
      </view>
    </View>
  );
};
