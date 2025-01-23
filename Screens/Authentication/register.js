import React, { useState } from "react";
import styles from './register.css.js';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        console.log('Username:', username, 'Email:', email, 'Password:', password, 'Confirm Password:', confirmpassword);
    };

    const handleLogin = () => {
        console.log('Navigate to Login Screen');
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

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginText}>
                    Already have an account?{' '}
                    <Text style={styles.loginLink}>Login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen;
