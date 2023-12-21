import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[]; //Generic type
}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'aa1cc89faff04f25a30e17c339c9149b'
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) =>  {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    }
}
export default APIClient;