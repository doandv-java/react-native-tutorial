import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AuthContext} from "../context/AuthContent";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const val = useContext(AuthContext);


    return (
        <View styles={styles.container}>
            <View styles={styles.wrapper}>
                <Text>{val}</Text>
                <TextInput style={styles.input}
                           placeholder="Enter email"
                           value={email}
                           onChangeText={text => setEmail(text)}
                />
                <TextInput style={styles.input}
                           placeholder="Enter password"
                           secureTextEntry
                           value={password}
                           onChangeText={text => setPassword(text)}
                />
                <Button title="Login"/>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={(e) => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    },

})
export default LoginScreen;