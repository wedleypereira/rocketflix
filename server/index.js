import cors from 'cors'
import express from 'express'
import axios from 'axios'
import { API_KEY, BASE_URL, language } from '../web/api.js'
import { getRandomInt } from '../web/getRandomInt.js'

const app = express()

app.use(cors())

app.get('/', async(req, res) => {
    
    try {
    
        const idPagina = getRandomInt(1, 50);
        const url = `${BASE_URL}${language}&page=${idPagina}`;
        console.log(url);

        // response é a resposta do axios MAS eu tiro o data de dentro do response, a linha abaixo pode ser feita das duas formas
        // const response = await axios('https://jsonplaceholder.typicode.com/users');
        // console.log(response.data)
        const { data } = await axios.get(url, {
            params: {
                api_key: API_KEY
            }
        });
        console.log(data);
        return res.json(data);

    }
    catch (error) {
        console.log(error);
    }
});

app.listen(3300)