import React from 'react';
import { View, StyleSheet, Image, Button, Text, TextInput } from 'react-native';

export default function FirstScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acessar</Text>
            <Text style={styles.subtitle}>Insira seus dados!</Text>
            
            <Text style={styles.inputtitle}>Email:</Text>
            <TextInput style={styles.input} placeholder="email" keyboardType="default"/>

            <Text style={styles.inputtitle}>Senha:</Text>
            <TextInput style={styles.input} placeholder="senha" keyboardType="default"/>

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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 18,
        color: '#888',
        marginBottom: 20,
    },
});