export interface Aria2Response<T> {
    id: string
    jsonrpc: string
    result: T
}