import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './aboutus.css.js';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.goBack()}
            >
                <Icon name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>About Us</Text>
                    <Image
                        source={require('../Images/app_icon.png')}
                        style={styles.iconLogo}
                        onPress={() => navigation.navigate('Profile')}
                    />
                    <Text style={styles.paragraph}>
                        Welcome to <Text style={styles.blueText}>TickIt</Text> , your ultimate productivity companion! Our app is designed to help you manage your tasks efficiently and stay organized.
                    </Text>
                    <Text style={styles.paragraph}>
                        Our mission is to provide a simple and intuitive task management solution that empowers you to achieve your goals and boost your productivity.
                    </Text>
                    <Text style={styles.paragraph}>
                        Whether you're managing personal tasks, work projects, or anything in between, <Text style={styles.blueText}>TickIt</Text> is here to help you stay on top of your to-do list.
                    </Text>
                    <Text style={styles.paragraph}>
                        Thank you for choosing <Text style={styles.blueText}>TickIt</Text>. We hope you enjoy using our app as much as we enjoyed creating it for you!
                    </Text>
                    <Image
                        source={require('../Images/todo.png')}
                        style={styles.notepadImage}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default AboutUs;