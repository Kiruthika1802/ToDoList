import React from 'react';
import styles from './welcome.css.js';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../Images/app_icon.png')}
          style={styles.icon}
        />
        <Text style={styles.name}>TickIt</Text>
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Productivity Starts Here!</Text>
        <Text style={styles.subtitle}>
          Log in or create an account to begin your journey!
        </Text>
      </View>

   
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default WelcomeScreen;
