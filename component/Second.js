import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from './Custom_bottom'; // Import your custom button

const EmploymentHistoryScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Certifications');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>My History</Text>
        <View style={styles.card}>
          <Text style={styles.companyTitle}>
            Frontware International Co. Ltd
          </Text>
          <Text style={styles.period}>IoT Developer | Aug 2021 - Mar 2022</Text>
          <View style={styles.tasks}>
            <Text style={styles.taskItem}>
              • Designed and developed IoT solutions, including 3D design for
              IoT products and 3D printer machines.
            </Text>
            <Text style={styles.taskItem}>
              • Worked with microcontrollers such as ESP8266, ESP32, and
              Raspberry Pi.
            </Text>
            <Text style={styles.taskItem}>
              • Developed and tested sensors and devices, ensuring accurate
              signal detection.
            </Text>
            <Text style={styles.taskItem}>
              • Provided technical reports and presentations in English.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.companyTitle}>Dextra Manufacturing Co. Ltd</Text>
          <Text style={styles.period}>
            Software Developer | Mar 2022 - Present
          </Text>
          <View style={styles.tasks}>
            <Text style={styles.taskItem}>
              • Developed IoT data collection systems, integrating PLC data with
              Node-Red dashboards.
            </Text>
            <Text style={styles.taskItem}>
              • Built RESTful APIs to interface with SQL servers, using Node.js
              and Express.js.
            </Text>
            <Text style={styles.taskItem}>
              • Implemented cloud-based solutions with Azure functions and
              TimerTrigger.
            </Text>
            <Text style={styles.taskItem}>
              • Customized LIMS applications to enhance functionality.
            </Text>
            <Text style={styles.taskItem}>
              • Developed and managed solutions using Power Apps and Power
              Automate, including data collection, filtering, and process
              automation.
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.botton} onPress={handlePress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Ensures the button stays at the bottom
  },
  container: {
    flexGrow: 1, // Allows ScrollView to grow and fill the space
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  companyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  period: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  tasks: {
    paddingLeft: 10,
  },
  taskItem: {
    fontSize: 14,
    color: '#3C4858',
    marginBottom: 5,
  },
  botton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20, // Adjust the position if needed
    right: 20, // Adjust the position
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EmploymentHistoryScreen;
