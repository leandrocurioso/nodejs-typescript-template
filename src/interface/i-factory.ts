export interface IFactory {
    getInstance();
}

export interface IFactorySync<T> extends IFactory {
    getInstance(): T;
}

export interface IFactoryAsync<T> extends IFactory {
    getInstance(): Promise<T>;
}
