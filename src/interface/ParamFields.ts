// param字段


export interface AddUriParam {
    //保存目录
    dir?: string
    //文件名
    out?: string
    referer?: string
    cookie?: string
}


export interface Aria2Options {
    "allow-overwrite": string
    "allow-piece-length-change": string
    "always-resume": string
    "async-dns": string
    "auto-file-renaming": string
    "bt-enable-hook-after-hash-check": string
    "bt-enable-lpd": string
    "bt-force-encryption": string
    "bt-hash-check-seed": string
    "bt-load-saved-metadata": string
    "bt-max-peers": string
    "bt-metadata-only": string
    "bt-min-crypto-level": string
    "bt-remove-unselected-file": string
    "bt-request-peer-speed-limit": string
    "bt-require-crypto": string
    "bt-save-metadata": string
    "bt-seed-unverified": string
    "bt-stop-timeout": string
    "bt-tracker-connect-timeout": string
    "bt-tracker-interval": string
    "bt-tracker-timeout": string
    "check-integrity": string
    "conditional-get": string
    "connect-timeout": string
    "content-disposition-default-utf8": string
    "continue": string
    "dir": string
    "dry-run": string
    "enable-http-keep-alive": string
    "enable-http-pipelining": string
    "enable-mmap": string
    "enable-peer-exchange": string
    "file-allocation": string
    "follow-metalink": string
    "follow-torrent": string
    "force-save": string
    "ftp-pasv": string
    "ftp-reuse-connection": string
    "ftp-type": string
    "hash-check-only": string
    "http-accept-gzip": string
    "http-auth-challenge": string
    "http-no-cache": string
    "lowest-speed-limit": string
    "max-connection-per-server": string
    "max-download-limit": string
    "max-file-not-found": string
    "max-mmap-limit": string
    "max-resume-failure-tries": string
    "max-tries": string
    "max-upload-limit": string
    "metalink-enable-unique-protocol": string
    "metalink-preferred-protocol": string
    "min-split-size": string
    "no-file-allocation-limit": string
    "no-netrc": string
    "parameterized-uri": string
    "pause-metadata": string
    "piece-length": string
    "proxy-method": string
    "realtime-chunk-checksum": string
    "referer": string
    "remote-time": string
    "remove-control-file": string
    "retry-wait": string
    "reuse-uri": string
    "rpc-save-upload-metadata": string
    "save-not-found": string
    "seed-ratio": string
    "seed-time": string
    "split": string
    "stream-piece-selector": string
    "timeout": string
    "uri-selector": string
    "use-head": string
    "user-agent": string
}

export interface Aria2Task {
    gid: string;
    status: string;
    totalLength: number;
    completedLength: number;
    uploadLength: number;
    pieceLength: number;
    numPieces: number;
    connections: number;
    bitfield: string;
    dir: string;
    files: TaskFile[];
    downloadSpeed: number;
    uploadSpeed: number;


    //以下为未确定数据类型的字段

    infoHash: string;
    numSeeders: string;
    seeder: string;
    errorCode: string;
    errorMessage: string;
    followedBy: string;
    following: string;
    benumbersTo: string;
    bittorrent: object;
    verifiedLength: string;
    verifyIntegrityPending: string;
}

export interface TaskFile {
    path: String
    completedLength: number
    length: number
    index: number
    selected: Boolean
    uris: Array<{ uri: string, status: string }>
}