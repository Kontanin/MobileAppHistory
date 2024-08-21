import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const App = () => {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Game duration set to 10 seconds
  const [position, setPosition] = useState({
    x: width / 2 - 50,
    y: height / 2 - 50,
  });
  const [circleColor, setCircleColor] = useState('#000000'); // Default color
  const [isModalVisible, setIsModalVisible] = useState(true); // Control modal visibility

  useEffect(() => {
    // Load the highest score from AsyncStorage when the app starts
    const loadHighestScore = async () => {
      try {
        const savedHighestScore = await AsyncStorage.getItem('highestScore');
        if (savedHighestScore !== null) {
          setHighestScore(parseInt(savedHighestScore, 10));
        }
      } catch (e) {
        console.error('Failed to load highest score.', e);
      }
    };

    loadHighestScore();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !isModalVisible) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      if (score > highestScore) {
        saveHighestScore(score);
      }
    }
  }, [timeLeft, isModalVisible]);

  const handleTap = () => {
    if (timeLeft > 0) {
      setScore((prevScore) => prevScore + 1);
      setPosition({
        x: Math.random() * (width - 120),
        y: Math.random() * (height - 250) + 150, // Adjusted height to prevent overlap
      });
      setCircleColor(getRandomColor()); // Set a new random color
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const saveHighestScore = async (newHighestScore) => {
    try {
      await AsyncStorage.setItem('highestScore', newHighestScore.toString());
      setHighestScore(newHighestScore);
    } catch (e) {
      console.error('Failed to save highest score.', e);
    }
  };

  const handleNewGame = () => {
    setScore(0);
    setTimeLeft(10); // Reset timer to 10 seconds
    setPosition({
      x: width / 2 - 50,
      y: height / 2 - 50,
    });
    setCircleColor('#000000'); // Reset color to black
  };

  const startGame = () => {
    setIsModalVisible(false); // Hide modal and start the game
    setTimeLeft(10); // Reset timer to 10 seconds
  };

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Welcome to the Game!</Text>
            <Text style={styles.modalDescription}>
              Tap on the circle as many times as you can before the time runs
              out! to make a highest Score if you can! come on!!!
            </Text>
            <Text style={styles.modalDescription}>let's play the game</Text>
            <TouchableOpacity onPress={startGame} style={styles.startButton}>
              <Text style={styles.startButtonText}>Start Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.score}>Score: {score}</Text>
        <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
      </View>
      {timeLeft > 0 ? (
        <TouchableOpacity
          onPress={handleTap}
          style={[
            styles.circle,
            { top: position.y, left: position.x, backgroundColor: circleColor },
          ]}
        >
          <Text style={styles.circleText}>Touch Me</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.endContainer}>
          <Text style={styles.endMessage}>Game Over! Final Score: {score}</Text>
          <Text style={styles.highestScore}>Highest Score: {highestScore}</Text>
          <TouchableOpacity
            onPress={handleNewGame}
            style={styles.newGameButton}
          >
            <Text style={styles.newGameButtonText}>New Game</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 0,
  },
  score: {
    fontSize: 24,
  },
  timer: {
    fontSize: 24,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center', // Center the text inside the circle
    alignItems: 'center', // Center the text inside the circle
    position: 'absolute',
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  endContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  endMessage: {
    fontSize: 30,
    textAlign: 'center',
  },
  highestScore: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  newGameButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  newGameButtonText: {
    fontSize: 18,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  startButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default App;
