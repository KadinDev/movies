import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator, //criar loading
} from 'react-native';

import api from './src/services/api';

import { Filmes } from './src/filmes';

export default function App(){

  const [filmes, setFilmes] = useState([]);


  //começa em true pq quando abre o aplicativo está em loading,
  //e só vai sair do loading quando as informações carregarem
  const [loading, setLoading] = useState(true);


  // primeira vai carregar toda a lista de filmes,
  // useEffect vai esperar carregar completa para depois mostrar
  useEffect( () => {

    async function loadMovies(){
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data)

      //quando o app for montado na tela usuario, ele vai buscar os filmes
      //e colocar ele em setFilmes()
      setFilmes(response.data);
      setLoading(false);
    };

    loadMovies();

  }, [] );


  if(loading){
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
        
        <ActivityIndicator
          color="#121212" size={45}
        />
      
      </View>
    )
  } else {

    return (
      <View style={styles.container}>
        
        <StatusBar backgroundColor="#e53243" barStyle="light-content" />
        
        <FlatList
          data={filmes}
          keyExtractor={ item => String(item.id) }
          renderItem={ ({ item }) => <Filmes data={item} /> }
        />
  
      </View>
    );

  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})