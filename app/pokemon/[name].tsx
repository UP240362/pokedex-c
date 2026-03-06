import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokeonDetailsScreen() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>{params.name}</Text>
    </View>
  );
}
//COMO FUNCIONAN LAS RUTAS
