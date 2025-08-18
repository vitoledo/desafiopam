import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Pressable } from 'react-native';

export default function FirstScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/casual_dog.png')}
                style={styles.img}
            />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>
            <TouchableOpacity style={styles.buttonaces}>
                <Text style={styles.buttonText}>Como deseja acessar?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonopc} onPress={() => navigation.navigate('First')}>
                <Text style={styles.buttonText}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 400,
        height: 400,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        color: '#888',
        marginBottom: 20,
    },
    buttonaces: {
        backgroundColor: '#007bff'
    },
    buttonopc: {

    },
});