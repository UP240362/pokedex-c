import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.split("/").filter(Boolean).at(-1);
  console.log(id);
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Pressable
      onPress={() => router.push(`/pokemon/${props.name}`)}
      style={({ pressed }) => [
        style.pressableSheet,
        pressed && {
          opacity: 0.5,
        },
      ]}
    >
      <View>
        <Image
          source={{ uri: pokemonImageURL }}
          style={{ width: 100, height: 100 }}
        ></Image>
        <Text>{props.name}</Text>
        <Text>{id}</Text>
      </View>
    </Pressable>
  );
}
const style = StyleSheet.create({
  pressableSheet: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "light blue",
  },
});
