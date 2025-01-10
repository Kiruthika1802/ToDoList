import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IntroPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        
        <Image
          source={require('./images/app_icon.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>TickIt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 10
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default IntroPage;
