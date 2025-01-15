import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('./images/app_icon.png')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00AEEF', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#AAA', 
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 0.4,
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#00AEEF', 
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    borderWidth: 2,
    borderColor: '#00AEEF', 
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  createAccountText: {
    color: '#00AEEF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
