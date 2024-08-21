import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import profileImage from '../profile/mypic.jpg'; // Import the local image
import node from '../profile/node.png'; // Import the local image
import reactLogo from '../profile/react.png';
import IoT from '../profile/IoT.png';
import crystal from '../profile/crystal.png';
import CustomButton from './Custom_bottom'; // Import your custom button

export default function Test({ navigation }) {
  const handlePress = () => {
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={profileImage} // Use the local image
          style={styles.profileImage}
        />
        <Text style={styles.titleText}>IT Application Engineer</Text>
        <Text style={styles.descriptionText}>Welcome to my mobile app.</Text>
        <Text style={styles.descriptionText}>
          I'm Konatnin, an IT Application Engineer.
        </Text>
      </View>
      <Text style={styles.headerText}>My Experience</Text>
      <View style={styles.experienceContainer}>
        <View style={styles.experienceCard}>
          <Image source={IoT} style={styles.experienceImage} />
          <Text style={styles.experienceText}>IoT</Text>
        </View>
        <View style={styles.experienceCard}>
          <Image source={crystal} style={styles.experienceImage} />
          <Text style={styles.experienceText}>Crystal Reports</Text>
        </View>
        <View style={styles.experienceCard}>
          <Image source={node} style={styles.experienceImage} />
          <Text style={styles.experienceText}>Node.js</Text>
        </View>
        <View style={styles.experienceCard}>
          <Image source={reactLogo} style={styles.experienceImage} />
          <Text style={styles.experienceText}>React</Text>
        </View>
      </View>
      <StatusBar style="auto" />

      {/* Use the Custom Button */}
      <View style={styles.cb}>
        <CustomButton title="Next" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cb: {
    position: 'absolute',
    bottom: 0, // Adjust the position if needed
    right: 20, // Adjust the position
  },
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  headerText: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3C4858',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3C4858',
  },
  descriptionText: {
    fontSize: 16,
    color: '#3C4858',
    textAlign: 'center',
  },
  experienceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  experienceCard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 120,
    height: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  experienceImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  experienceText: {
    fontSize: 16,
    color: '#3C4858',
    textAlign: 'center',
  },
});
