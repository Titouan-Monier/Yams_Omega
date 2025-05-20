// app/components/board/board.component.js
import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SocketContext } from '../../../contexts/socket.context';

const OpponentScore = () => {
    const socket = useContext(SocketContext);
    const [opponentScore, setOpponentScore] = useState(0);

    useEffect(() => {
        socket.on("game.score.view-state", (data) => {
            console.log("player :" + data['opponentScore'] + "opponent : " + data['OpponentScore']);
            setOpponentScore(data['opponentScore']);
        });
    }, []);

    return (
        <View style={styles.opponentScoreContainer}>
          <Text>OpponentScore: {opponentScore}</Text>
        </View>
       
      );
      
};
const styles = StyleSheet.create({
    opponentScoreContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
export default OpponentScore;