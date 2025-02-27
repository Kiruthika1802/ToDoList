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
    fontSize: 25,
    fontWeight: 'bold',
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
    padding: 15,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
  centerButton: {
    backgroundColor: '#1c54b4',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
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
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 5,
    left: 2,
  },
  priorityGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  priorityTitle: {
    color: '#fff',
    marginVertical: 5,
    borderBottomWidth: 1,

    borderColor: '#fff',
    paddingTop: 10,
    textAlign: 'center',
  },
  priorityItem: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    flexDirection: 'row', 
    gap: 5, 
    padding: 8,
  },
  priorityItemSelected: {
    backgroundColor: '#00AEEF',
  },
  priorityText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sendIconBackground: {
    backgroundColor: '#00AEEF',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: '#00AEEF', 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  taskList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  taskItemCompleted: {
    backgroundColor: '#444',
    opacity: 0.7,
  },
  taskContent: {
    flex: 1,
    marginRight: 10,
  },
  taskTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  taskInfo: {
    color: '#aaa',
    fontSize: 14,
  },
  taskTextCompleted: {
    color: '#888',
    textDecorationLine: 'line-through',
  },
  completeButton: {
    padding: 5,
  },
  completedButton: {
    opacity: 0.7,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dateTimeButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  priorityInput: {
    backgroundColor: '#f0f0f0',
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    width: 50,
    textAlign: 'center',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 5,
    paddingLeft: 5,
  },
  contentContainer: {
    flex: 1,
  },
});
