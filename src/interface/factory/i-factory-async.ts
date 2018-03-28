export interface IFactoryAsync<T> {
    getInstance(): Promise<T>;
}
