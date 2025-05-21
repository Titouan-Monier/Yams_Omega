// app/components/board/decks/player-deck.component.js

import React, { useState, useContext, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SocketContext } from "../../../contexts/socket.context";
import Dice from "./dice.component";

const PlayerDeck = () => {

  const socket = useContext(SocketContext);
  const [displayPlayerDeck, setDisplayPlayerDeck] = useState(false);
  const [dices, setDices] = useState(Array(5).fill(false));
  const [displayRollButton, setDisplayRollButton] = useState(false);
  const [rollsCounter, setRollsCounter] = useState(0);
  const [rollsMaximum, setRollsMaximum] = useState(3);

  useEffect(() => {

    socket.on("game.deck.view-state", (data) => {
      setDisplayPlayerDeck(data['displayPlayerDeck']);
      if (data['displayPlayerDeck']) {
        setDisplayRollButton(data['displayRollButton']);
        setRollsCounter(data['rollsCounter']);
        setRollsMaximum(data['rollsMaximum']);
        setDices(data['dices']);
      }
    });
  }, []);

  const toggleDiceLock = (index) => {
    const newDices = [...dices];
    if (newDices[index].value !== '' && displayRollButton) {
      socket.emit("game.dices.lock", newDices[index].id);
    }
  };

  const rollDices = () => {
    if (rollsCounter <= rollsMaximum) {
      socket.emit("game.dices.roll");
    }
  };

  return (

    <View style={styles.deckPlayerContainer}>

      {displayPlayerDeck && (

        <>
          {displayRollButton && (

            <>
              <View style={styles.rollInfoContainer}>
                <Text style={styles.rollInfoText}>
                  Lancer {rollsCounter} / {rollsMaximum}
                </Text>
              </View>
            </>

          )}

          <View style={styles.diceContainer}>
            {dices.map((diceData, index) => (
              <Dice
                key={diceData.id}
                index={index}
                locked={diceData.locked}
                value={diceData.value}
                onPress={toggleDiceLock}
              />
            ))}
          </View>

          {displayRollButton && (

            <>
              <TouchableOpacity style={styles.rollButton} onPress={rollDices}>
                <Text style={styles.rollButtonText}>Roll</Text>
              </TouchableOpacity>
            </>

          )}
        </>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  deckPlayerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "black",
     
    paddingVertical: 16,
  },
  rollInfoContainer: {
    marginBottom: 10,
  },
  rollInfoText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#ff9900", 
  },
  diceContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginBottom: 10,
    gap: 8,
    flexWrap: "wrap",
  },
  rollButton: {
    width: "40%",
    backgroundColor: "orange",
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    shadowColor: "#ff6600",     
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10, 
  },
  rollButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textShadowColor: "#ffcc00",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default PlayerDeck;
