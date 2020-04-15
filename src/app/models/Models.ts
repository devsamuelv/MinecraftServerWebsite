export interface ServerDoc {
    id?,
    port?: number,
    name: string,
    mantainace: boolean,
    offline: boolean,
    online: boolean
}

export interface FormDoc {
    id?,
    serverName: string,
    serverInfo: string,
    time: string
}