import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    input: {
        width: '80%',
        margin: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.54,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,

    }
})

export default SignUp = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log(' os parametros nomw, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplicativo/json',
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
            <View>
                <Text>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    placeholder='insira seu nome aqui'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='insira seu email aqui'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder='insira seu senha aqui'
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Pressable onPress={registrarUsuario}>
                    <Text>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )

}