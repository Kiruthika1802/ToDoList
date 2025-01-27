import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './home.css.js';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [priorityPickerVisible, setPriorityPickerVisible] = useState(false); // Priority picker visibility
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [priority, setPriority] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const renderPriorityPicker = () =>
    priorityPickerVisible && (
      <View>
        <View style={styles.priorityGrid}>
          {[...Array(10).keys()].map((_, index) => (
            <TouchableOpacity
              key={index + 1}
              style={[
                styles.priorityItem,
                priority === index + 1 && styles.priorityItemSelected,
              ]}
              onPress={() => setPriority(index + 1)}
            >
              <Text style={styles.priorityText}>{index + 1}</Text>
            </TouchableOpacity>
          ))}

        </View>
        <View style={styles.priorityButtonsContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setPriorityPickerVisible(false)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              // Add your save logic here
              setPriorityPickerVisible(false);
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

  const handleSubmitTask = () => {
    console.log('Task Title:', taskTitle);
    console.log('Task Description:', taskDescription);
    console.log('Date:', selectedDate);
    console.log('Time:', selectedTime);
    console.log('Priority:', priority);
    setTaskTitle('');
    setTaskDescription('');
    setSelectedDate(null);
    setSelectedTime(null);
    setPriority(null);
    setModalVisible(false);
    setPriorityPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Today</Text>
        <View>
          <Image
            source={require('../Images/app_icon.png')}
            style={styles.iconLogo}
          />
          <Text style={styles.iconText}>TickIt</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder="Search tasks..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
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

        <TouchableOpacity
          style={styles.centerButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="plus" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="cog" size={24} color="#fff" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView style={styles.modalOverlay} behavior="padding">
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Task</Text>
            <TextInput
              style={styles.input}
              placeholder="Task Title"
              placeholderTextColor="#888"
              value={taskTitle}
              onChangeText={setTaskTitle}
              autoFocus
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="#888"
              value={taskDescription}
              onChangeText={setTaskDescription}
              multiline
            />
            <View style={styles.iconsRow}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => setDatePickerVisible(true)}
              >
                <Icon name="calendar" size={20} color="#FFF" />
              </TouchableOpacity>
              {datePickerVisible && (
                <DateTimePicker
                  value={new Date()}
                  mode="date"
                  display="default"
                  onChange={(event, date) => {
                    setDatePickerVisible(false);
                    if (date) setSelectedDate(date.toLocaleDateString());
                  }}
                />
              )}

              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => setTimePickerVisible(true)}
              >
                <Icon name="clock-o" size={20} color="#FFF" />
              </TouchableOpacity>
              {timePickerVisible && (
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="default"
                  onChange={(event, time) => {
                    setTimePickerVisible(false);
                    if (time)
                      setSelectedTime(
                        time.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      );
                  }}
                />
              )}

              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => setPriorityPickerVisible(!priorityPickerVisible)} // Toggle priority picker visibility
              >
                <Icon name="flag" size={20} color="#FFF" />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.iconButton, styles.sendButton]} // Add an additional style for the send button
                onPress={handleSubmitTask}
              >
                <View style={styles.sendIconBackground}>
                  <Icon name="send" size={20} color="#FFF" />
                </View>
              </TouchableOpacity>
            </View>
            {renderPriorityPicker()}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default HomeScreen;
