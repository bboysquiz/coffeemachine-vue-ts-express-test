export interface Data {
    savedConfigs: Config[],
    configs: Config[]
}
export interface Config {
    id: number;
    [key: string]: any;
}
export type CountAction = 'increment' | 'decrement'


export interface State {
    configurations: Config[];
    selectedOptions: Config;
}