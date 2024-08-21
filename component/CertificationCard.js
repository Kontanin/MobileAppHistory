import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CertificationCard = ({ certification }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.certificationText}>{certification}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
    justifyContent: 'center',
  },
  certificationText: {
    fontSize: 16,
    color: '#3C4858',
    textAlign: 'center',
  },
});

export default CertificationCard;
