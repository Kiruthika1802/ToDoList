import React, { useState } from "react";
import styles from './register.css.js';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const validateForm = () => {
        if (!username.trim()) {
            Alert.alert('Error', 'Please enter your username');
            return false;
        }
        if (!email.trim() || !email.includes('@')) {
            Alert.alert('Error', 'Please enter a valid email');
            return false;
        }
        if ((!password || password.length < 8) && password !== confirmpassword) {
            Alert.alert('Error', 'Please enter a valid password');
            return false;
        }
        return true;
    };

    const handleRegistration = async () => {
        if (!validateForm()) return;

        try {
            //console.log('Sending registration data:', { Username: username, Email: email, Password: password });

            const response = await axios.post('http://192.168.0.97:8000/ToDo/v1/AddDetails',
                JSON.stringify({
                    Username: username,
                    Email: email,
                    Password: password
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            console.log('Registration response:', response.data);

            if (response.data) {
                Alert.alert('Success', 'Registration successful!');
                navigation.navigate('Home');
            }
        } catch (error) {
            console.error('Registration error:', error);
            Alert.alert(
                'Error',
                error.response?.data?.message ||
                error.message ||
                'Registration failed. Please try again.'
            );
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Register</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Username"
                    placeholderTextColor="#666"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    placeholderTextColor="#666"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#666"
                    value={confirmpassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={[{ flexDirection: 'row' }]}>
                <Text style={styles.loginText}>
                    Already have an account?{' '} </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>

                    <Text style={styles.loginLink}>Login</Text>

                </TouchableOpacity>
            </View>
        </View>

    );
};

export default RegisterScreen;
