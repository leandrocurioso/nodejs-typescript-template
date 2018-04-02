export interface IRestneerServer {
    listen(port: number, name: string, pid: number): void;
    loadMiddleware(): void;
}
