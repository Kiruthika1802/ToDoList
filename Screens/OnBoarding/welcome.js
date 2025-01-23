import React from 'react';
import styles from './welcome.css.js';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../Images/app_icon.png')}
          style={styles.icon}
        />
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Productivity Starts Here!</Text>
        <Text style={styles.subtitle}>
          Log in or create an account to begin your journey!
        </Text>
      </View>

   
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default WelcomeScreen;
