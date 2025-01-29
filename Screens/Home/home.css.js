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
    padding: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 15, 
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
  taskButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  taskText: {
    color: '#fff',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notepadImage: {
    width: 230,
    height: 230,
    marginBottom: -10,
    marginTop: -80,
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
    backgroundColor: '#1c54b4',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  iconLogo: {
    width: 35,
    height: 35,
    borderColor: '#fff',
    //borderWidth: 1,
    //borderRadius: 50,
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 5,
  },
  priorityGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  priorityItem: {
    width: '22%', // Adjusted width for better alignment
    aspectRatio: 1, // Maintain square shape
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
  },
  priorityItemSelected: {
    backgroundColor: '#00AEEF',
  },
  priorityText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sendIconBackground: {
    backgroundColor: '#00AEEF', // Blue background
    padding: 15,               // Padding around the icon
    borderRadius: 5,          // Round the button
    justifyContent: 'center',  // Center the icon vertically
    alignItems: 'center',      // Center the icon horizontally
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#444',
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 15,
  },
  searchIcon: {
    padding: 10,
  },
  searchBox: {
    flex: 1,
    color: '#fff',
    padding: 10,
  },
  priorityButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   // marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
