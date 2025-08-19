import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Pressable } from 'react-native';

export default function FirstScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/casual_dog.png')}
                style={styles.imgdog}
            />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.buttonaces}>
                <View style={styles.viewaces}>
                    <Image
                        source={require('../images/Google.png')}
                        style={styles.imggoogle}
                    />
                    <Text style={styles.buttontxt1}>Como deseja acessar?</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonopc} onPress={() => navigation.navigate('First')}>
                <Text style={styles.buttontxt2}>Outras opções</Text>
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
    imgdog: {
        marginBottom: 20,
    },
    imggoogle: {
        width: 25,
        height: 25,
    },
    viewaces: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        paddingLeft: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 13,
        color: '#888',
        marginBottom: 20,
    },
    buttonaces: {
        backgroundColor: '#14C871',
        borderRadius: 5,
        width: 350,
        height: 50,
        marginBottom: 20,
    },
    buttonopc: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#14C871',
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontxt1: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    },
    buttontxt2: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },
});