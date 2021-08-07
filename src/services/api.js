import axios from 'axios';
//https://sujeitoprogramador.com/

//rota para trazer os filmes
//r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;