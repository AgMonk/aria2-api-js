import {AxiosInstance, AxiosResponse} from "axios";
import {Aria2RequestParam} from "./interface/Aria2RequestParam";

export class Aria2 {
    id: number
    token?: string
    instance: AxiosInstance


    constructor(instance: AxiosInstance, token?: string) {
        this.token = token;
        this.instance = instance;
        this.id = 0;

        instance.interceptors.response.use(res => {
            console.log(`${new Date().toLocaleString()} Request Success: `, res)
            return res;
        }, error => {
            let response = <AxiosResponse>error.response;
            if (response) {
                const {data, status, config} = response
                const {url} = config
                if (status >= 500) {
                    throw {status, url, message: "Net Error", data: config.data}
                }
                if (status >= 400) {
                    throw {status, url, message: data.message, data: config.data}
                }
            }
            throw error;
        });
    }

    call(method: string, params: any[]): Promise<AxiosResponse> {
        if (this.token) {
            params = ["token:" + this.token, ...params]
        }
        let param: Aria2RequestParam = {
            id: "" + this.id++,
            params, method, jsonrpc: "2.0"
        }
        return this.instance.post("", param).then(res => {
            return res.data
        })
    }


}