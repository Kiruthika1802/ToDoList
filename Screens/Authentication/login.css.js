import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }, 
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
      },
      input: {
        width: '100%',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#333',
      },
      loginButton: {
        backgroundColor: '#00aced',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      registerText: {
        color: '#aaa',
        marginTop: 20,
        textAlign: 'center',
      },
      registerLink: {
        color: '#00aced',
        fontWeight: 'bold',
      },

});