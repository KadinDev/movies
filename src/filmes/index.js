import React, { useState } from 'react';

import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';

import { Details } from '../Details';

export function Filmes( { data } ){

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View>
            
            <View style={styles.card}>
                <Text style={styles.titulo}> { data.nome } </Text>

                <Image
                    style={styles.foto}
                    source={{ uri: data.foto }}
                />

                <View style={styles.areaBotao} >
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={styles.botao} 
                        onPress={ () => setVisibleModal(true)} >
                        
                        <Text style={styles.botaoTexto}> LEIA MAIS </Text>
                    
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="slide"
                visible={visibleModal}
                transparent={true}
            >
                
                <Details
                    //como nessa pagina tenho a propriedade data, que pega o acesso
                    //as informações dos filmes, eu passo essa data para esse componente Details tbm
                    
                    filme={data} //chamo de filme, e passo o data para ele
                    
                    //nomeei essa propriedade de back, e passo o useState para ele, para fechar o modal
                    back={ () => setVisibleModal(false) }
                />

            </Modal>
          
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 4,
    },
    foto: {
        height: 250,
        zIndex: 2,
    },
    titulo: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'normal'
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 3,
    },
    botao: {
        width: 100,
        backgroundColor: '#e53243',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    botaoTexto: {
        color: '#FFF',
        textAlign: 'center',
    }
})