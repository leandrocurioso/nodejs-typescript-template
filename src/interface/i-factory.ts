export interface IFactoryOptions {
    params: any;
}

export interface IFactory {
    getInstance(options?: IFactoryOptions);
}

export interface IFactorySync<T> extends IFactory {
    getInstance(options?: IFactoryOptions): T;
}

export interface IFactoryAsync<T> extends IFactory {
    getInstance(options?: IFactoryOptions): Promise<T>;
}
