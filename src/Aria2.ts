import {AxiosInstance, AxiosResponse} from "axios";
import {Aria2RequestParam} from "./interface/Aria2RequestParam";
import {Aria2Method} from "./Aria2Method";
import {GlobalStatus} from "./interface/ResponseResult";
import {AddUriParam} from "./interface/ParamFields";
import {Aria2Options} from "./interface/Aria2Options";
import {Aria2Task} from "./interface/Aria2Task";

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

    /**
     * 获取任务配置
     * @param gid gid
     */
    getOption(gid: string): Promise<Aria2Options> {
        return this.callM(Aria2Method.GET_OPTION, [gid])
    }

    /**
     * 查询已停止任务
     * @param page 页码
     * @param size 记录数
     * @param keys https://aria2.github.io/manual/en/html/aria2c.html#aria2.tellStatus
     * @since 2022/10/21 14:10
     */
    tellStop(page: number, size: number, keys?: string[]): Promise<Aria2Task[]> {
        return this.callM(Aria2Method.TELL_STOPPED, [Math.max(0, (page - 1)), size, keys || []])
    }

}