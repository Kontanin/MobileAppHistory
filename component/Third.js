import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CertificationCard from './CertificationCard'; // Import the card component

const certifications = [
  'Turtlebot3 Thailand championship 2019',
  'Python Bootcamp by Uncle Engineer',
  'Introduction to SQL by Datacamp',
  'The online course Road to DataEngineer from DataTH',
  'Data Structures & Algorithms in Python',
  'Regular expressions in Python',
  'Python (Basic) Certificate by HackerRank',
  'Problem Solving (Basic) Certificate by HackerRank',
  'JavaScript (Basic) Certificate by HackerRank',
  'The Project Management Survival Kit',
  'The Git & GitHub Bootcamp',
];

const CertificationScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Certifications</Text>
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Ensures the button stays at the bottom
  },
  container: {
    padding: 10,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CertificationScreen;
