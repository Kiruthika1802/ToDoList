import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import styles from './settings.css.js';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '@env';

const Settings = () => {
  const navigation = useNavigation();
  const [isNameModalVisible, setNameModalVisible] = useState(false);
  const [isPasswordModalVisible, setPasswordModalVisible] = useState(false);
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const userEmail = 'pupaclic@gmail.com';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userEmail) return;

      try {
        const response = await axios.post(`${API_URL}/GetDetails`, {
          Email: userEmail
        });
        if (response.data.message === 'User Exists') {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userEmail]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF5733" />
      </View>
    );
  }

  const toggleNameModal = () => {
    setNameModalVisible(!isNameModalVisible);
  };

  const togglePasswordModal = () => {
    setPasswordModalVisible(!isPasswordModalVisible);
  };

  const toggleImageModal = () => {
    setImageModalVisible(!isImageModalVisible);
  };

  const handleSaveName = async () => {
    const updatedName = accountName.trim() || user?.Username;
    try {
      const response = await axios.patch(`${API_URL}/UpdateName`, {
        Username: updatedName,
        Email: user?.Email,
      });

      if (response.data) {
        const refreshResponse = await axios.post(`${API_URL}/GetDetails`, {
          Email: userEmail
        });

        if (refreshResponse.data.message === 'User Exists') {
          setUser(refreshResponse.data.data);
        }
      }
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setAccountName('');
      toggleNameModal();
    }
  };

  const handleSavePassword = async () => {
    const newPass = newPassword.trim();
    try {
      const response = await axios.patch(`${API_URL}/UpdatePassword`, {
        Password: newPass,
        Email: user?.Email,
        ConfPassword: oldPassword,
      });

      if (response.data) {
        const refreshResponse = await axios.post(`${API_URL}/GetDetails`, {
          Email: userEmail
        });

        if (refreshResponse.data.message === 'User Exists') {
          setUser(refreshResponse.data.data);
        }
      }
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setNewPassword('');
      togglePasswordModal();
    }
  };


const handleTakePicture = () => {
  toggleImageModal();
};

const handleImportFromGallery = () => {
  toggleImageModal();
};

return (
  <ScrollView style={styles.container}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('Home')}
    >
      <Icon name="chevron-left" size={24} color="#fff" />
    </TouchableOpacity>
    <View style={styles.profileSection}>
      <Text style={styles.text}>Profile</Text>
      <Image
        source={require('../Images/user.png')}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>{user?.Username || 'Name'}</Text>
    </View>


    <View style={styles.section}>
      <TouchableOpacity style={styles.option} onPress={toggleNameModal}>
        <Icon name="user" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.optionText} >Change account name</Text>
        <Icon name="chevron-right" size={20} color="#fff" style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={togglePasswordModal}>
        <Icon name="lock" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.optionText} >Change account password</Text>
        <Icon name="chevron-right" size={20} color="#fff" style={styles.arrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={toggleImageModal}>
        <Icon name="camera" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.optionText}>Change account Image</Text>
        <Icon name="chevron-right" size={20} color="#fff" style={styles.arrow} />
      </TouchableOpacity>
    </View>


    <View style={styles.section}>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AboutUs')}>
        <Icon name="info-circle" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.optionText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Help')}>
        <Icon name="question-circle" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.optionText}>Help</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.section}>
      <TouchableOpacity style={styles.logoutOption} onPress={() => navigation.navigate('Welcome')}>
        <Icon name="sign-out" size={20} color="red" style={styles.icon} />
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>

    <Modal isVisible={isNameModalVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Change Account Name</Text>
        <TextInput
          style={styles.input}
          placeholder={user?.Username}
          placeholderTextColor={'#888'}
          value={accountName}
          onChangeText={setAccountName}
        />
        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.cancelButton} onPress={toggleNameModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveName}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    <Modal isVisible={isPasswordModalVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Change Account Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter old password"
          placeholderTextColor={'#888'}
          secureTextEntry
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          placeholderTextColor={'#888'}
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.cancelButton} onPress={togglePasswordModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSavePassword}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    <Modal isVisible={isImageModalVisible}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Change Account Image</Text>
        <View style={{ flexDirection: 'column', marginBottom: 20 }}>
          <TouchableOpacity style={styles.modalButtons}>
            <Text style={[styles.optionText, { marginBottom: 20 }]}>Take Picture</Text>
            <Icon name="chevron-right" size={20} color="#fff" style={styles.arrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButtons}>
            <Text style={styles.optionText}>Import from Gallery</Text>
            <Icon name="chevron-right" size={20} color="#fff" style={styles.arrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.cancelButton} onPress={toggleImageModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={toggleImageModal}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </ScrollView>
);
};

export default Settings;