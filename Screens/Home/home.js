import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './home.css.js';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="bars" size={28} color="#fff" />
        <Text style={styles.headerTitle}>Index</Text>
        <Icon name="user-circle" size={28} color="#fff" />
      </View>

      <View style={styles.mainContent}>
        <Image
          source={require('../Images/todo.png')}
          style={styles.notepadImage}
        />
        <Text style={styles.taskPrompt}>What do you want to do today?</Text>
        <Text style={styles.addTaskPrompt}>Tap + to add your tasks</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="search" size={24} color="#fff" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={24} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;