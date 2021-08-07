import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


// pegando as props que passei na linha 51 e 54,
// peguei já de forma desestruturada, ao invés de props,
// já coloco assim ( { filme, back } )
// no onPress ao invés de {props.back}, passo diretamente o back
export function Details( { filme, back } ){
    return (
        <View style={styles.container}>

            <View style={styles.modalContainer}>

                <TouchableOpacity 
                    style={styles.back}
                    onPress={back}
                >
                    <Text 
                        style={{color: '#FFF', 
                        fontSize: 20, 
                        textAlign: 'right',
                    }}
                    >X</Text>
                
                </TouchableOpacity>


                <Text style={styles.title}>
                    {filme.nome}
                </Text>

                <Text style={styles.sinopse}> Sinopse: </Text>
                <Text style={styles.description}> {filme.sinopse} </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    modalContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 200,
        borderTopRightRadius: 0,
        paddingHorizontal: 10,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderTopColor: '#EFF',
        borderLeftColor: '#EFF',
    },
    back: {
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title: {
        color: '#FFF',
        fontSize: 28,
        textAlign: 'right',
        padding: 20,
        fontWeight: 'bold',
    },
    sinopse: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 20
    },
    description: {
        color: '#FFF',
        marginLeft: 20,
        marginRight: 10,
        fontSize: 20,
        textAlign: 'left'
    }
})