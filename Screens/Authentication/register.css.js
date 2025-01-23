import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 5,
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
      registerButton: {
        backgroundColor: '#00aced',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
      registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
      loginText: {
        color: '#aaa',
        marginTop: 20,
        textAlign: 'center',
    },
      loginLink: {
        color: '#00aced',
        fontWeight: 'bold',
    },

});