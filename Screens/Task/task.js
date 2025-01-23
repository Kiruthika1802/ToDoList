import React from 'react';
import styles from './task.css.js';
import { Text, View } from 'react-native';

const TaskScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task</Text>
        </View>
    );
}

export default TaskScreen;