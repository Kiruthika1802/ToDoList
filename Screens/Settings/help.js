import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './help.css.js';
import { useNavigation } from '@react-navigation/native';

const Help = () => {
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
                    <Text style={styles.title}>Help</Text>
                    <Image
                        source={require('../Images/app_icon.png')}
                        style={styles.iconLogo}
                    />
                    <Text style={styles.paragraph}>
                        <Text style={styles.welcome}>Welcome to the Help section of TickIt!</Text> 
                    </Text>
                    <Text style={[styles.paragraph,{textAlign:'center', fontSize:14}]}>Here you can find answers to common questions and learn how to use the app effectively.</Text>
                    <View style={styles.qaContainer}>
                        <Text style={styles.question}>Q: How do I add a new task?</Text>
                        <Text style={styles.answer}>A: To add a new task, click on the "Add Task" button on the home screen. Fill in the task details and save.</Text>
                    </View>
                    <View style={styles.qaContainer}>
                        <Text style={styles.question}>Q: How do I change the priority of a task?</Text>
                        <Text style={styles.answer}>A: To change the priority of a task, click on the task and select the desired priority level from the priority picker.</Text>
                    </View>
                    <View style={styles.qaContainer}>
                        <Text style={styles.question}>Q: How do I mark a task as completed?</Text>
                        <Text style={styles.answer}>A: To mark a task as completed, click on the checkbox next to the task. The task will be moved to the completed section.</Text>
                    </View>
                    <View style={styles.qaContainer}>
                        <Text style={styles.question}>Q: How do I delete a task?</Text>
                        <Text style={styles.answer}>A: To delete a task, swipe left on the task and click on the delete icon.</Text>
                    </View>
                    <Text style={styles.paragraph}>
                        If you have any other questions or need further assistance, please contact our support team at <Text style={styles.blueText}>support@tickit.com</Text>.
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

export default Help;