import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
        paddingHorizontal: 20,
      },
      iconContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 50,
      },
      textContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', 
        marginTop: 15,
      }, 
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00AEEF', 
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 16,
        color: '#AAA', 
        textAlign: 'center',
        paddingHorizontal: 20,
      },
      buttonContainer: {
        flex: 0.4,
        width: '100%',
        alignItems: 'center',
      },
      loginButton: {
        backgroundColor: '#00AEEF', 
        paddingVertical: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      createAccountButton: {
        borderWidth: 2,
        borderColor: '#00AEEF', 
        paddingVertical: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
      },
      createAccountText: {
        color: '#00AEEF', 
        fontSize: 16,
        fontWeight: 'bold',
      },
});