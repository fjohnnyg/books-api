import axios from 'axios';

export default axios.create({
    baseURL: "http://5.22.217.225:8081/api/v1",
    mode: 'no-cors'
});