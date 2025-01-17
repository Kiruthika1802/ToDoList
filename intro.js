import React from 'react';
import styles from "./css/intro.css.js";
import { View, Text, Image } from 'react-native';

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

export default IntroPage;
