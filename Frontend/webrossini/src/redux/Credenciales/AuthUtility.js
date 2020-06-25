import axios from 'axios';


const getLinks = (timeout) => {
    const endpoint = 'http://localhost:8000/api-token/';
    const body = JSON.stringify({'email':'w.coronadobarrantes@gmail.com', 'password':'estrellaxxx000'});

    const controller = new AbortController();
    const { signal } = controller;

    setTimeout(() => controller.abort() , timeout);


    return axios.post(endpoint, body, {timeout: 2}).then(
        response => {
            console.log(response.data);
            return response.json;
        }
    ).catch(error => {
        console.log(error.code);
        console.log(error.message);
        console.log(error.stack);
    });
}

