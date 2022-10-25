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