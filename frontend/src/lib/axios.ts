import axios, { AxiosInstance, AxiosResponse } from "axios";

const API_BASEURL = "http://localhost:8888"
const ADMIN_SECRET = "secret"
export default class Axios {
    client: AxiosInstance;
    constructor() {
        this.client = axios.create({
            baseURL: API_BASEURL,
        });

    }
    async get(url: string, params: any) {
        const headers = {
            "content-type": "application/json",
            "x-hasura-admin-secret": ADMIN_SECRET
        };
        const response = await this.client.get(url, { headers: headers, params: params})
        return response
    }
}

