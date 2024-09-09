import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4498a9',

    },

    inputView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20

    },

    box: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 5

    },

    title: {
        color: '#727473',
        fontSize: 25,
        fontWeight: 'bold',
    },

    input: {
        width: '100%',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#727473',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        color: '#434544'
        
    },
    button: {
        backgroundColor: '#727473',
        
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default SignUp = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log(' os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nome, email: email, password: senha })
        })
        if (!resposta) {
            console.log('erro')
        } else if (resposta.status == 200) {
            console.log('user criado com sucesso')
        } else {
            console.log('ocorreu um erro')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View >
                    <Text style={styles.title} >Registre-se</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                        placeholder='Nome:'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder='Email:'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        placeholder='Senha:'
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.button}>
                    <Pressable onPress={registrarUsuario}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    )

}