import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00AEEF',
    padding: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notepadImage: {
    width: 230,
    height: 230,
    marginBottom: -5,
  },
  taskPrompt: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
  addTaskPrompt: {
    fontSize: 14,
    color: '#aaa',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00AEEF',
    padding: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
  centerButton: {
    width: 60,
    height: 60,
    backgroundColor: '#007BFF', // Blue color for the button
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5, // Adjust spacing from the bottom navigation
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
});
