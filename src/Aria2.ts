import {AxiosInstance, AxiosResponse} from "axios";
import {Aria2RequestParam} from "./interface/Aria2RequestParam";
import {Aria2Method} from "./Aria2Method";
import {GlobalStatus} from "./interface/ResponseResult";
import {AddUriParam} from "./interface/ParamFields";

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

    call(method: string, params?: any[]): Promise<any> {
        if (this.token) {
            let s = "token:" + this.token
            params = params ? [s, ...params] : [s]
        }
        let param: Aria2RequestParam = {
            id: "" + this.id++,
            params: params || [], method, jsonrpc: "2.0"
        }
        return this.instance.post("", param).then(res => {
            return res.data.result
        })
    }

    callM(method: Aria2Method, params?: any[]): Promise<any> {
        return this.call(method, params)
    }

    /**
     * 添加下载
     * @param urls url
     * @param param 参数
     */
    addUri(urls: string[], param: AddUriParam): Promise<string> {
        return this.callM(Aria2Method.ADD_URI, [urls, param])
    }

    /**
     * 获取概况统计
     */
    getGlobalStat(): Promise<GlobalStatus> {
        return this.callM(Aria2Method.GET_GLOBAL_STAT)
    }

}