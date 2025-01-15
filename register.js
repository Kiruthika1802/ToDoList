import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

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

            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.registerText}>
                    Already have an account?{' '}
                    <Text style={styles.loginLink}>Login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#333',
    },
      registerButton: {
        backgroundColor: '#00aced',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
      registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
      registerText: {
        color: '#aaa',
        marginTop: 20,
        textAlign: 'center',
    },
      loginLink: {
        color: '#00aced',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
