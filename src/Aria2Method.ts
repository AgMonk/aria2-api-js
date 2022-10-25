export enum Aria2Method{
    ADD_URI = "aria2.addUri",
    remove = "aria2.remove",
    TELL_STATUS = "aria2.tellStatus",
    TELL_ACTIVE = "aria2.tellActive",
    TELL_WAITING = "aria2.tellWaiting",
    TELL_STOPPED = "aria2.tellStopped",
    GET_OPTION = "aria2.getOption",
    GET_GLOBAL_STAT = "aria2.getGlobalStat",
    REMOVE_DOWNLOAD_RESULT = "aria2.removeDownloadResult",
    GET_VERSION = "aria2.getVersion",
    MULTI_CALL = "system.multicall",
}