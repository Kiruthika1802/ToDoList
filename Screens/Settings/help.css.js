import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AEEF',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'left',
  },
  welcome: {
    fontWeight: 'bold',
    color: '#00AEEF',
    textAlign: 'center',
  },
  qaContainer: {
    marginBottom: 15,
  },
  question: {
    fontWeight: 'bold',
    color: '#00AEEF',
    marginBottom: 5,
  },
  answer: {
    color: '#fff',
  },
  blueText: {
    color: '#00AEEF',
  },
  notepadImage: {
    width: 230,
    height: 230,
    marginTop: -40,
  },
  iconLogo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
});