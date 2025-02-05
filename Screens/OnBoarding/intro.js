import React,{useEffect} from 'react';
import styles from "./intro.css.js";
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Welcome');
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    source={require('../Images/app_icon.png')}
                    style={styles.icon}
                />
            </View>
            <Text style={styles.title}>TickIt</Text>
        </View>
    );
};

export default IntroScreen;
