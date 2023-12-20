import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'aa1cc89faff04f25a30e17c339c9149b'
    }
});