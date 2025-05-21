// app/components/board/decks/dice.component.js

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Dice = ({ index, locked, value, onPress, opponent }) => {

  const handlePress = () => {
    if (!opponent) {
      onPress(index);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.dice, locked && styles.lockedDice]}
      onPress={handlePress}
      disabled={opponent}
    >
      <Text style={styles.diceText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 50,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    shadowColor: "#ff6600",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10, // Pour Android
  },
  lockedDice: {
    backgroundColor: "#4d4d4d", // gris foncé pour mieux contraster
    borderColor: "#1a1a1a",
    shadowColor: "#333",
  },
  diceText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textShadowColor: "#ffcc00",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  opponentText: {
    fontSize: 12,
    color: "red",
    fontStyle: "italic",
  },
});

export default Dice;
