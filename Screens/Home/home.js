import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput, KeyboardAvoidingView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './home.css.js';
import tasksData from '../SampleData/tasks.json';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [priorityPickerVisible, setPriorityPickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [priority, setPriority] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editDatePickerVisible, setEditDatePickerVisible] = useState(false);
  const [editTimePickerVisible, setEditTimePickerVisible] = useState(false);
  const [taskCounts, setTaskCounts] = useState({ left: 0, done: 0 });

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const todaysTasks = tasksData
      .filter(task => task.date === today)
      .sort((a, b) => a.priority - b.priority);
    setTasks(todaysTasks);
  }, []);

  useEffect(() => {
    const completedTasks = tasks.filter(task => task.completed).length;
    setTaskCounts({
      left: tasks.length - completedTasks,
      done: completedTasks
    });
  }, [tasks]);

  const renderPriorityPicker = () =>
    priorityPickerVisible && (
      <View>
        <Text style={[styles.priorityTitle, { paddingBottom: 10, fontWeight: 'bold' }]}>Select Priority</Text>
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
              <Icon name="flag" size={18} color="#fff" />
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

  const handleTaskPress = (task) => {
    setEditingTask({ ...task });
    setEditModalVisible(true);
  };

  const handleEditDateChange = (event, selectedDate) => {
    setEditDatePickerVisible(false);
    if (selectedDate) {
      setEditingTask(prev => ({
        ...prev,
        date: selectedDate.toISOString().split('T')[0]
      }));
    }
  };

  const handleEditTimeChange = (event, selectedTime) => {
    setEditTimePickerVisible(false);
    if (selectedTime) {
      setEditingTask(prev => ({
        ...prev,
        time: selectedTime.toLocaleTimeString().slice(0, 5)
      }));
    }
  };

  const handleUpdateTask = () => {
    if (!editingTask.title.trim()) {
      Alert.alert('Error', 'Title is required');
      return;
    }

    const updatedTasks = tasks.map(task =>
      task.id === editingTask.id ? editingTask : task
    );
    setTasks(updatedTasks);
    setEditModalVisible(false);
  };

  const handleTaskDelete = () => {
    const filteredTasks = tasks.filter(task => task.id !== selectedTask.id);
    setTasks(filteredTasks);
    setEditModalVisible(false);
  };

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ).sort((a, b) => {
      if (a.completed === b.completed) {
        return a.priority - b.priority;
      }
      return a.completed ? 1 : -1;
    });
    setTasks(updatedTasks);
  };

  const getPriorityColor = (priority) => {
    if (priority <= 2) return '#4CAF50';
    if (priority <= 4) return '#FFC107';
    return '#FF5252';
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.taskItem,
        item.completed && styles.taskItemCompleted,
        { borderLeftWidth: 5, borderLeftColor: getPriorityColor(item.priority) }
      ]}
      onPress={() => handleTaskPress(item)}
    >
      <View style={styles.taskContent}>
        <Text style={[
          styles.taskTitle,
          item.completed && styles.taskTextCompleted
        ]}>
          {item.title}
        </Text>
        <Text style={[
          styles.taskInfo,
          item.completed && styles.taskTextCompleted
        ]}>
          {item.time} - Priority: {item.priority}
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.completeButton,
          item.completed && styles.completedButton
        ]}
        onPress={() => handleTaskComplete(item.id)}
      >
        <Icon
          name={item.completed ? "check-circle" : "circle-o"}
          size={24}
          color={item.completed ? "#888" : "#00AEEF"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

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
      <View style={[styles.header, { marginTop: -7, paddingHorizontal: 15 }]}>
        <View style={styles.taskContainer}>
          <TouchableOpacity style={styles.taskButton}>
            <Text style={styles.taskText}>{taskCounts.left} Task left</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskButton}>
            <Text style={styles.taskText}>{taskCounts.done} Task done</Text>
          </TouchableOpacity>
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
      {tasks.length === 0 ? (
        <View style={styles.mainContent}>
          <Image
            source={require('../Images/todo.png')}
            style={styles.notepadImage}
          />
          <Text style={styles.taskPrompt}>What do you want to do today?</Text>
          <Text style={styles.addTaskPrompt}>Tap + to add your tasks</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={item => item.id.toString()}
          style={styles.taskList}
        />)}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.centerButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="plus" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="cog" size={24} color="#fff" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity> 
      </View>

      <Modal
        visible={editModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setEditModalVisible(false)}
      >
        <KeyboardAvoidingView style={styles.modalOverlay} behavior="padding">
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Task</Text>

            <TextInput
              style={styles.input}
              placeholder="Task Title"
              value={editingTask?.title}
              onChangeText={(text) => setEditingTask(prev => ({ ...prev, title: text }))}
            />

            <TouchableOpacity
              style={styles.dateTimeButton}
              onPress={() => setEditDatePickerVisible(true)}
            >
              <Text>{editingTask?.date || 'Select Date'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dateTimeButton}
              onPress={() => setEditTimePickerVisible(true)}
            >
              <Text>{editingTask?.time || 'Select Time'}</Text>
            </TouchableOpacity>

            <View style={styles.priorityContainer}>
              <Text>Priority:</Text>
              <TextInput
                style={styles.priorityInput}
                keyboardType="numeric"
                value={editingTask?.priority.toString()}
                onChangeText={(text) => setEditingTask(prev => ({
                  ...prev,
                  priority: parseInt(text) || 1
                }))}
                maxLength={1}
              />
            </View>

            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Description"
              value={editingTask?.description}
              onChangeText={(text) => setEditingTask(prev => ({ ...prev, description: text }))}
              multiline
            />

            {editDatePickerVisible && (
              <DateTimePicker
                value={new Date(editingTask?.date)}
                mode="date"
                onChange={handleEditDateChange}
              />
            )}

            {editTimePickerVisible && (
              <DateTimePicker
                value={new Date(`2000-01-01T${editingTask?.time}`)}
                mode="time"
                onChange={handleEditTimeChange}
              />
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleTaskDelete}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleUpdateTask}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

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
                onPress={() => setPriorityPickerVisible(!priorityPickerVisible)}
              >
                <Icon name="flag" size={20} color="#FFF" />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.iconButton, styles.sendButton]}
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
